// Badge rules evaluated after each lesson completion / mock test.
const BADGE_DEFS = [
  { key: 'first-lesson', label: 'First Step 🚗' },
  { key: 'beginner-graduate', label: 'Beginner Graduate 🎓' },
  { key: 'intermediate-graduate', label: 'Intermediate Pro 🛣️' },
  { key: 'advanced-graduate', label: 'Advanced Ace 🏁' },
  { key: 'road-ready', label: 'Road Ready — Mock Test Passed ✅' },
  { key: 'perfect-score', label: 'Perfect Score 💯' },
  { key: 'streak-7', label: '7-Day Streak 🔥' },
];

function badgeDef(key) {
  return BADGE_DEFS.find((b) => b.key === key);
}

function awardBadge(user, key) {
  if (user.badges.some((b) => b.key === key)) return false;
  const def = badgeDef(key);
  if (!def) return false;
  user.badges.push({ key: def.key, label: def.label });
  return true;
}

module.exports = { BADGE_DEFS, awardBadge };
