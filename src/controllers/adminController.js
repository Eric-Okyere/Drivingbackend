const Lesson = require('../models/Lesson');
const Question = require('../models/Question');
const User = require('../models/User');

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ---- Lessons ----

async function createLesson(req, res, next) {
  try {
    const body = req.body;
    const slug = body.slug ? slugify(body.slug) : slugify(body.title);
    const lesson = await Lesson.create({ ...body, slug });
    res.status(201).json({ lesson });
  } catch (err) {
    next(err);
  }
}

async function updateLesson(req, res, next) {
  try {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json({ lesson });
  } catch (err) {
    next(err);
  }
}

async function deleteLesson(req, res, next) {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    await Question.deleteMany({ lesson: lesson._id });
    res.json({ message: 'Lesson and its questions deleted' });
  } catch (err) {
    next(err);
  }
}

async function listAllLessons(req, res, next) {
  try {
    const lessons = await Lesson.find({}).sort({ category: 1, order: 1 });
    res.json({ lessons });
  } catch (err) {
    next(err);
  }
}

// ---- Questions ----

async function createQuestion(req, res, next) {
  try {
    const question = await Question.create(req.body);
    res.status(201).json({ question });
  } catch (err) {
    next(err);
  }
}

async function updateQuestion(req, res, next) {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.json({ question });
  } catch (err) {
    next(err);
  }
}

async function deleteQuestion(req, res, next) {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.json({ message: 'Question deleted' });
  } catch (err) {
    next(err);
  }
}

async function listQuestionsForLessonAdmin(req, res, next) {
  try {
    const questions = await Question.find({ lesson: req.params.lessonId });
    res.json({ questions });
  } catch (err) {
    next(err);
  }
}

// ---- Users / stats ----

async function listStudents(req, res, next) {
  try {
    const students = await User.find({ role: 'student' })
      .select('name email streakCount totalPoints badges createdAt')
      .sort({ totalPoints: -1 });
    res.json({ students });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createLesson,
  updateLesson,
  deleteLesson,
  listAllLessons,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  listQuestionsForLessonAdmin,
  listStudents,
};
