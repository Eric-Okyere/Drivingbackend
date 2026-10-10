const mongoose = require('mongoose');

// Records a single answer a student gave, for one lesson-quiz question.
const attemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true, index: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    selectedIndex: { type: Number, required: true },
    correct: { type: Boolean, required: true },
  },
  { timestamps: true }
);

attemptSchema.index({ user: 1, lesson: 1 });

module.exports = mongoose.model('Attempt', attemptSchema);
