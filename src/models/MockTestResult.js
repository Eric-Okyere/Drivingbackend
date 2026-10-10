const mongoose = require('mongoose');

// Mirrors the real DVLA computer-based test: 40 questions, pass mark 75% (30/40), 45-minute limit.
const mockTestResultSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    totalQuestions: { type: Number, required: true, default: 40 },
    correctCount: { type: Number, required: true },
    scorePercent: { type: Number, required: true },
    passed: { type: Boolean, required: true },
    durationSeconds: { type: Number, required: true },
    questionIds: { type: [mongoose.Schema.Types.ObjectId], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('MockTestResult', mockTestResultSchema);
