const Lesson = require('../models/Lesson');
const LessonProgress = require('../models/LessonProgress');

// Public listing, but when a token is present we attach the caller's progress per lesson.
async function listLessons(req, res, next) {
  try {
    const { category } = req.query;
    const filter = { published: true };
    if (category) filter.category = category;

    const lessons = await Lesson.find(filter).sort({ category: 1, order: 1 }).lean();

    let progressByLesson = {};
    if (req.user) {
      const progress = await LessonProgress.find({ user: req.user._id }).lean();
      progressByLesson = Object.fromEntries(progress.map((p) => [p.lesson.toString(), p]));
    }

    const CATEGORY_ORDER = ['beginner', 'intermediate', 'advanced'];
    const completedCountByCategory = { beginner: 0, intermediate: 0, advanced: 0 };
    const totalCountByCategory = { beginner: 0, intermediate: 0, advanced: 0 };
    lessons.forEach((l) => {
      totalCountByCategory[l.category] += 1;
      if (progressByLesson[l._id.toString()]?.completed) {
        completedCountByCategory[l.category] += 1;
      }
    });

    const result = lessons.map((l) => {
      const catIndex = CATEGORY_ORDER.indexOf(l.category);
      // A category unlocks once every lesson in the previous category is completed.
      const previousCategory = CATEGORY_ORDER[catIndex - 1];
      const locked =
        !!previousCategory &&
        totalCountByCategory[previousCategory] > 0 &&
        completedCountByCategory[previousCategory] < totalCountByCategory[previousCategory];

      return {
        ...l,
        progress: progressByLesson[l._id.toString()] || null,
        locked,
      };
    });

    res.json({ lessons: result });
  } catch (err) {
    next(err);
  }
}

async function getLesson(req, res, next) {
  try {
    const lesson = await Lesson.findOne({ slug: req.params.slug, published: true }).lean();
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });

    let progress = null;
    if (req.user) {
      progress = await LessonProgress.findOne({ user: req.user._id, lesson: lesson._id }).lean();
    }

    res.json({ lesson: { ...lesson, progress } });
  } catch (err) {
    next(err);
  }
}

module.exports = { listLessons, getLesson };
