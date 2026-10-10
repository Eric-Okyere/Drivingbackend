const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { subscriptionSummary } = require('../utils/subscription');

const badgeSchema = new mongoose.Schema(
  {
    key: { type: String, required: true }, // e.g. "beginner-graduate"
    label: { type: String, required: true },
    earnedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    // Not required: accounts created via Google Sign-In have no local password.
    passwordHash: { type: String, required: false },
    authProvider: { type: String, enum: ['local', 'google'], default: 'local' },
    googleId: { type: String, unique: true, sparse: true, index: true },
    role: { type: String, enum: ['student', 'admin'], default: 'student' },
    licenseClassGoal: {
      type: String,
      enum: ['A', 'B', 'C', 'D'],
      default: 'B',
    }, // A: motorcycle, B: private car, C: commercial/taxi, D: heavy/articulated
    streakCount: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    lastActiveDate: { type: Date },
    totalPoints: { type: Number, default: 0 },
    badges: { type: [badgeSchema], default: [] },
    // Subscription is derived entirely from this expiry timestamp — no separate "active/expired"
    // field to drift out of sync. null/undefined/past = no active subscription.
    subscriptionExpiresAt: { type: Date, default: null },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function comparePassword(candidate) {
  if (!this.passwordHash) return Promise.resolve(false); // Google-only account
  return bcrypt.compare(candidate, this.passwordHash);
};

userSchema.methods.toSafeJSON = function toSafeJSON() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    role: this.role,
    authProvider: this.authProvider,
    licenseClassGoal: this.licenseClassGoal,
    streakCount: this.streakCount,
    longestStreak: this.longestStreak,
    totalPoints: this.totalPoints,
    badges: this.badges,
    subscription: subscriptionSummary(this),
    createdAt: this.createdAt,
  };
};

module.exports = mongoose.model('User', userSchema);
