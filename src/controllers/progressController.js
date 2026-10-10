const mongoose = require('mongoose');
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');
const Attempt = require('../models/Attempt');
const LessonProgress = require('../models/LessonProgress');
const { awardBadge } = require('../utils/badges');

const PASS_THRESHOLD_PERCENT = 70; // per-lesson quizzes use 70%, matching the DVLA CBT-style bar

// Submits a full lesson quiz result: [{ questionId, selectedIndex }]
async function submitLessonQuiz(req, res, next) {
  try {
    const { lessonId, answers } = req.body;
    if (!lessonId || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ message: 'lessonId and a non-empty answers array are required' });
    }
    if (!mongoose.isValidObjectId(lessonId)) {
      return res.status(400).json({ message: 'Invalid lessonId' });
    }

    const lesson = await Lesson.findById(lessonId);
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });

    const questionIds = answers.map((a) => a.questionId);
    const questions = await Question.find({ _id: { $in: questionIds } });
    const questionMap = Object.fromEntries(questions.map((q) => [q._id.toString(), q]));

    let correctCount = 0;
    const results = [];
    const attemptDocs = [];

    for (const a of answers) {
      const q = questionMap[a.questionId];
      if (!q) continue;
      const correct = q.correctIndex === a.selectedIndex;
      if (correct) correctCount += 1;
      results.push({
        questionId: q._id,
        correct,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
      });
      attemptDocs.push({
        user: req.user._id,
        lesson: lesson._id,
        question: q._id,
        selectedIndex: a.selectedIndex,
        correct,
      });
    }

    if (attemptDocs.length) await Attempt.insertMany(attemptDocs);

    const scorePercent = Math.round((correctCount / results.length) * 100);
    const passed = scorePercent >= PASS_THRESHOLD_PERCENT;

    let progress = await LessonProgress.findOne({ user: req.user._id, lesson: lesson._id });
    const firstLessonEver = !(await LessonProgress.exists({ user: req.user._id, completed: true }));
    const wasAlreadyCompleted = !!progress?.completed;

    if (!progress) {
      progress = new LessonProgress({
        user: req.user._id,
        lesson: lesson._id,
        category: lesson.category,
      });
    }
    progress.attemptsCount += 1;
    progress.bestScorePercent = Math.max(progress.bestScorePercent, scorePercent);
    if (passed && !progress.completed) {
      progress.completed = true;
      progress.completedAt = new Date();
    }
    await progress.save();

    // Points + badges
    const user = req.user;
    let newlyAwardedBadges = [];
    if (passed && !wasAlreadyCompleted) {
      user.totalPoints += 50 + correctCount * 2;
      if (firstLessonEver && awardBadge(user, 'first-lesson')) newlyAwardedBadges.push('first-lesson');

      const totalInCategory = await Lesson.countDocuments({ category: lesson.category, published: true });
      const completedInCategory = await LessonProgress.countDocuments({
        user: user._id,
        category: lesson.category,
        completed: true,
      });
      if (completedInCategory >= totalInCategory) {
        const badgeKey = `${lesson.category}-graduate`;
        if (awardBadge(user, badgeKey)) newlyAwardedBadges.push(badgeKey);
      }
    } else if (passed) {
      user.totalPoints += 5; // small reward for retaking/improving
    }
    if (scorePercent === 100 && awardBadge(user, 'perfect-score')) newlyAwardedBadges.push('perfect-score');
    if (user.streakCount >= 7 && awardBadge(user, 'streak-7')) newlyAwardedBadges.push('streak-7');
    await user.save();

    res.json({
      results,
      correctCount,
      totalQuestions: results.length,
      scorePercent,
      passed,
      newlyAwardedBadges,
      totalPoints: user.totalPoints,
    });
  } catch (err) {
    next(err);
  }
}

async function getMyProgress(req, res, next) {
  try {
    const progress = await LessonProgress.find({ user: req.user._id }).populate('lesson', 'title slug category');
    const totalLessons = await Lesson.countDocuments({ published: true });
    const completedLessons = progress.filter((p) => p.completed).length;

    res.json({
      progress,
      totalLessons,
      completedLessons,
      user: req.user.toSafeJSON(),
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { submitLessonQuiz, getMyProgress, PASS_THRESHOLD_PERCENT };
