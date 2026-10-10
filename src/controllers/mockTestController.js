const mongoose = require('mongoose');
const Question = require('../models/Question');
const MockTestResult = require('../models/MockTestResult');
const { awardBadge } = require('../utils/badges');

// Mirrors the real DVLA computer-based test as researched: 40 questions drawn at random
// from the full pool, 75% (30/40) to pass, 45-minute time limit.
const MOCK_TEST_SIZE = 40;
const MOCK_TEST_PASS_PERCENT = 75;
const MOCK_TEST_TIME_LIMIT_SECONDS = 45 * 60;

async function startMockTest(req, res, next) {
  try {
    const pool = await Question.aggregate([
      { $match: { inMockTestPool: true } },
      { $sample: { size: MOCK_TEST_SIZE } },
    ]);

    if (pool.length < MOCK_TEST_SIZE) {
      return res.status(400).json({
        message: `Not enough questions in the bank yet to run a full ${MOCK_TEST_SIZE}-question mock test (have ${pool.length}). Add more questions via the admin panel or seed script.`,
      });
    }

    const sanitized = pool.map((q) => ({
      id: q._id,
      prompt: q.prompt,
      choices: q.choices,
      category: q.category,
    }));

    res.json({
      questions: sanitized,
      timeLimitSeconds: MOCK_TEST_TIME_LIMIT_SECONDS,
      passPercent: MOCK_TEST_PASS_PERCENT,
    });
  } catch (err) {
    next(err);
  }
}

async function submitMockTest(req, res, next) {
  try {
    const { answers, durationSeconds } = req.body;
    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ message: 'answers array is required' });
    }

    const questionIds = answers.map((a) => a.questionId).filter((id) => mongoose.isValidObjectId(id));
    const questions = await Question.find({ _id: { $in: questionIds } });
    const questionMap = Object.fromEntries(questions.map((q) => [q._id.toString(), q]));

    let correctCount = 0;
    const results = answers.map((a) => {
      const q = questionMap[a.questionId];
      if (!q) return { questionId: a.questionId, correct: false };
      const correct = q.correctIndex === a.selectedIndex;
      if (correct) correctCount += 1;
      return {
        questionId: q._id,
        correct,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
      };
    });

    const totalQuestions = answers.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    const passed = scorePercent >= MOCK_TEST_PASS_PERCENT;

    const mockResult = await MockTestResult.create({
      user: req.user._id,
      totalQuestions,
      correctCount,
      scorePercent,
      passed,
      durationSeconds: durationSeconds || 0,
      questionIds,
    });

    const user = req.user;
    let newlyAwardedBadges = [];
    if (passed) {
      user.totalPoints += 200;
      if (awardBadge(user, 'road-ready')) newlyAwardedBadges.push('road-ready');
    }
    await user.save();

    res.json({
      mockResultId: mockResult._id,
      results,
      correctCount,
      totalQuestions,
      scorePercent,
      passed,
      passPercent: MOCK_TEST_PASS_PERCENT,
      newlyAwardedBadges,
    });
  } catch (err) {
    next(err);
  }
}

async function myMockTestHistory(req, res, next) {
  try {
    const history = await MockTestResult.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(20);
    res.json({ history });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  startMockTest,
  submitMockTest,
  myMockTestHistory,
  MOCK_TEST_PASS_PERCENT,
};
