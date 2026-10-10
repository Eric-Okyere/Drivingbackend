const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const topStudents = await User.find({ role: 'student' })
      .select('name totalPoints streakCount badges')
      .sort({ totalPoints: -1 })
      .limit(20);
    res.json({ leaderboard: topStudents });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
