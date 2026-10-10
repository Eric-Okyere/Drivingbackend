const Lesson = require('../models/Lesson');
const LessonProgress = require('../models/LessonProgress');
const { getCategoryCompletionMaps, isPrerequisiteLocked } = require('../utils/lessonAccess');
const { isLessonFree, hasActiveSubscription } = require('../utils/subscription');

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

    const maps = await getCategoryCompletionMaps(req.user?._id);
    const subscribed = hasActiveSubscription(req.user) || req.user?.role === 'admin';

    const result = lessons.map((l) => {
      const free = isLessonFree(l);
      let lockReason = null;
      if (isPrerequisiteLocked(l.category, maps)) lockReason = 'prerequisite';
      else if (!free && !subscribed) lockReason = 'subscription';

      return {
        ...l,
        progress: progressByLesson[l._id.toString()] || null,
        locked: !!lockReason,
        lockReason,
        isFree: free,
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

    const maps = await getCategoryCompletionMaps(req.user?._id);
    const subscribed = hasActiveSubscription(req.user) || req.user?.role === 'admin';
    const free = isLessonFree(lesson);

    let lockReason = null;
    if (isPrerequisiteLocked(lesson.category, maps)) lockReason = 'prerequisite';
    else if (!free && !subscribed) lockReason = 'subscription';

    if (lockReason) {
      // Teaser only — enough to entice, nothing a paying feature actually needs (no sections,
      // videoScript, key points, etc.) while the lesson is locked.
      return res.json({
        lesson: {
          _id: lesson._id,
          title: lesson.title,
          slug: lesson.slug,
          category: lesson.category,
          order: lesson.order,
          summary: lesson.summary,
          objective: lesson.objective,
          durationMinutes: lesson.durationMinutes,
          locked: true,
          lockReason,
          isFree: free,
        },
      });
    }

    let progress = null;
    if (req.user) {
      progress = await LessonProgress.findOne({ user: req.user._id, lesson: lesson._id }).lean();
    }

    res.json({ lesson: { ...lesson, progress, locked: false, lockReason: null, isFree: free } });
  } catch (err) {
    next(err);
  }
}

module.exports = { listLessons, getLesson };
