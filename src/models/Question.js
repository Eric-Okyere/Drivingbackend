const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true, index: true },
    category: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
      index: true,
    },
    prompt: { type: String, required: true },
    choices: {
      type: [String],
      required: true,
      validate: (v) => Array.isArray(v) && v.length >= 2 && v.length <= 6,
    },
    correctIndex: { type: Number, required: true, min: 0 },
    explanation: { type: String, required: true }, // shown when the student gets it wrong
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    tags: { type: [String], default: [] }, // e.g. ["road-signs", "roundabout"]
    // also usable in the 40-question mock DVLA test pool when true
    inMockTestPool: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Question', questionSchema);
