// Shared "is this category unlocked yet" logic, used by both the lesson list and lesson detail
// endpoints so the two can never disagree with each other.

const Lesson = require('../models/Lesson');
const LessonProgress = require('../models/LessonProgress');

const CATEGORY_ORDER = ['beginner', 'intermediate', 'advanced'];

async function getCategoryCompletionMaps(userId) {
  const lessons = await Lesson.find({ published: true }).select('category').lean();
  const totalCountByCategory = { beginner: 0, intermediate: 0, advanced: 0 };
  lessons.forEach((l) => {
    totalCountByCategory[l.category] += 1;
  });

  const completedCountByCategory = { beginner: 0, intermediate: 0, advanced: 0 };
  if (userId) {
    const progress = await LessonProgress.find({ user: userId, completed: true }).select('category').lean();
    progress.forEach((p) => {
      completedCountByCategory[p.category] += 1;
    });
  }

  return { totalCountByCategory, completedCountByCategory };
}

function isPrerequisiteLocked(category, maps) {
  const catIndex = CATEGORY_ORDER.indexOf(category);
  const previousCategory = CATEGORY_ORDER[catIndex - 1];
  if (!previousCategory) return false;
  return (
    maps.totalCountByCategory[previousCategory] > 0 &&
    maps.completedCountByCategory[previousCategory] < maps.totalCountByCategory[previousCategory]
  );
}

module.exports = { CATEGORY_ORDER, getCategoryCompletionMaps, isPrerequisiteLocked };
