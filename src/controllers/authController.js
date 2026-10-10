const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { signToken } = require('../utils/token');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function register(req, res, next) {
  try {
    const { name, email, password, licenseClassGoal } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: 'An account with this email already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      passwordHash,
      licenseClassGoal: licenseClassGoal || 'B',
    });

    const token = signToken(user);
    res.status(201).json({ token, user: user.toSafeJSON() });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (!user.passwordHash) {
      return res.status(401).json({
        message: 'This account signs in with Google. Use the "Continue with Google" button instead.',
      });
    }

    const match = await user.comparePassword(password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const today = new Date();
    const last = user.lastActiveDate ? new Date(user.lastActiveDate) : null;
    if (last) {
      const diffDays = Math.floor((today.setHours(0, 0, 0, 0) - new Date(last).setHours(0, 0, 0, 0)) / 86400000);
      if (diffDays === 1) {
        user.streakCount += 1;
      } else if (diffDays > 1) {
        user.streakCount = 1;
      }
    } else {
      user.streakCount = 1;
    }
    user.longestStreak = Math.max(user.longestStreak, user.streakCount);
    user.lastActiveDate = new Date();
    await user.save();

    const token = signToken(user);
    res.json({ token, user: user.toSafeJSON() });
  } catch (err) {
    next(err);
  }
}

async function me(req, res) {
  res.json({ user: req.user.toSafeJSON() });
}

module.exports = { register, login, me };
