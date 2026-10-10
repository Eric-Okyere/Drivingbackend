const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    passwordHash: { type: String, required: true },
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
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.passwordHash);
};

userSchema.methods.toSafeJSON = function toSafeJSON() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    role: this.role,
    licenseClassGoal: this.licenseClassGoal,
    streakCount: this.streakCount,
    longestStreak: this.longestStreak,
    totalPoints: this.totalPoints,
    badges: this.badges,
    createdAt: this.createdAt,
  };
};

module.exports = mongoose.model('User', userSchema);
