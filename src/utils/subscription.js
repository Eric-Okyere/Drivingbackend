// Subscription/paywall constants and helpers, shared across controllers.
//
// Business rule (confirmed with Rhema Driving School): the first 2 Beginner lessons stay free
// as a taste of the content; everything else (remaining lessons, the mock DVLA test, and
// certificates) requires an active paid subscription.

const SUBSCRIPTION_PRICE_GHS = Number(process.env.SUBSCRIPTION_PRICE_GHS) || 70;
const SUBSCRIPTION_PERIOD_DAYS = Number(process.env.SUBSCRIPTION_PERIOD_DAYS) || 30;

const FREE_CATEGORY = 'beginner';
const FREE_LESSON_MAX_ORDER = 2;

function isLessonFree(lesson) {
  if (!lesson) return false;
  return lesson.category === FREE_CATEGORY && lesson.order <= FREE_LESSON_MAX_ORDER;
}

// Subscription state is derived purely from subscriptionExpiresAt — no separate status field to
// drift out of sync. A user is "active" exactly while expiresAt is in the future.
function hasActiveSubscription(user) {
  if (!user || !user.subscriptionExpiresAt) return false;
  return new Date(user.subscriptionExpiresAt).getTime() > Date.now();
}

function subscriptionSummary(user) {
  const active = hasActiveSubscription(user);
  const expiresAt = user?.subscriptionExpiresAt || null;
  const daysRemaining = active
    ? Math.max(0, Math.ceil((new Date(expiresAt).getTime() - Date.now()) / (24 * 60 * 60 * 1000)))
    : 0;
  return { active, expiresAt, daysRemaining };
}

module.exports = {
  SUBSCRIPTION_PRICE_GHS,
  SUBSCRIPTION_PERIOD_DAYS,
  FREE_CATEGORY,
  FREE_LESSON_MAX_ORDER,
  isLessonFree,
  hasActiveSubscription,
  subscriptionSummary,
};
