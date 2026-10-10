const Lesson = require('../models/Lesson');
const Question = require('../models/Question');
const User = require('../models/User');
const Payment = require('../models/Payment');
const { subscriptionSummary, SUBSCRIPTION_PERIOD_DAYS } = require('../utils/subscription');

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
      .select('name email streakCount totalPoints badges createdAt subscriptionExpiresAt')
      .sort({ totalPoints: -1 });

    const withSubscription = students.map((s) => ({
      ...s.toObject(),
      subscription: subscriptionSummary(s),
    }));

    res.json({ students: withSubscription });
  } catch (err) {
    next(err);
  }
}

// ---- Subscriptions / payments ----

async function listPayments(req, res, next) {
  try {
    const payments = await Payment.find({})
      .populate('user', 'name email')
      .populate('activatedBy', 'name')
      .sort({ createdAt: -1 })
      .limit(200);
    res.json({ payments });
  } catch (err) {
    next(err);
  }
}

// Admin manually marks a student as paid — for cash, bank transfer, or MoMo sent straight to
// the school rather than through the in-app Paystack flow.
async function activateSubscription(req, res, next) {
  try {
    const months = Math.max(1, Number(req.body.months) || 1);
    const note = typeof req.body.note === 'string' ? req.body.note.slice(0, 300) : '';

    const user = await User.findById(req.params.id);
    if (!user || user.role !== 'student') return res.status(404).json({ message: 'Student not found' });

    const now = new Date();
    const base = user.subscriptionExpiresAt && user.subscriptionExpiresAt > now ? user.subscriptionExpiresAt : now;
    const periodEnd = new Date(base.getTime() + months * SUBSCRIPTION_PERIOD_DAYS * 24 * 60 * 60 * 1000);

    user.subscriptionExpiresAt = periodEnd;
    await user.save();

    await Payment.create({
      user: user._id,
      amountGHS: 0, // manual activation — the real amount was collected outside the app
      method: 'manual',
      status: 'success',
      periodStart: base,
      periodEnd,
      note: note || 'Marked as paid by admin',
      activatedBy: req.user._id,
    });

    res.json({ student: { ...user.toObject(), subscription: subscriptionSummary(user) } });
  } catch (err) {
    next(err);
  }
}

// Admin correction tool — immediately ends a student's active access (e.g. a mistaken activation).
async function revokeSubscription(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (!user || user.role !== 'student') return res.status(404).json({ message: 'Student not found' });

    user.subscriptionExpiresAt = null;
    await user.save();

    res.json({ student: { ...user.toObject(), subscription: subscriptionSummary(user) } });
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
  listPayments,
  activateSubscription,
  revokeSubscription,
};
