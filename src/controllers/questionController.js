const mongoose = require('mongoose');
const Question = require('../models/Question');
const Lesson = require('../models/Lesson');

// Returns quiz questions for a lesson WITHOUT the correct answer index, so the client can't cheat by reading the payload.
async function getQuestionsForLesson(req, res, next) {
  try {
    const lesson = await Lesson.findOne({ slug: req.params.slug }).lean();
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });

    const questions = await Question.find({ lesson: lesson._id }).lean();

    const sanitized = questions.map((q) => ({
      id: q._id,
      prompt: q.prompt,
      choices: q.choices,
      difficulty: q.difficulty,
    }));

    res.json({ lessonId: lesson._id, questions: sanitized });
  } catch (err) {
    next(err);
  }
}

// Grades a single answer server-side and returns whether it was correct + the explanation.
async function submitAnswer(req, res, next) {
  try {
    const { questionId, selectedIndex } = req.body;
    if (!questionId || typeof selectedIndex !== 'number') {
      return res.status(400).json({ message: 'questionId and selectedIndex are required' });
    }
    if (!mongoose.isValidObjectId(questionId)) {
      return res.status(400).json({ message: 'Invalid questionId' });
    }

    const question = await Question.findById(questionId);
    if (!question) return res.status(404).json({ message: 'Question not found' });

    const correct = question.correctIndex === selectedIndex;

    res.json({
      correct,
      correctIndex: question.correctIndex,
      explanation: question.explanation,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getQuestionsForLesson, submitAnswer };
