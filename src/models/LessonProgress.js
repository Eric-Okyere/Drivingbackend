const mongoose = require('mongoose');

// One document per (user, lesson): tracks whether the lesson quiz has been passed.
const lessonProgressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true, index: true },
    category: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
    bestScorePercent: { type: Number, default: 0 },
    attemptsCount: { type: Number, default: 0 },
    completed: { type: Boolean, default: false }, // passed with >= 70%
    completedAt: { type: Date },
  },
  { timestamps: true }
);

lessonProgressSchema.index({ user: 1, lesson: 1 }, { unique: true });

module.exports = mongoose.model('LessonProgress', lessonProgressSchema);
