const mongoose = require('mongoose');
const crypto = require('crypto');

const certificateSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    mockTestResult: { type: mongoose.Schema.Types.ObjectId, ref: 'MockTestResult', required: true },
    serialNumber: { type: String, required: true, unique: true },
    licenseClassGoal: { type: String, required: true },
    scorePercent: { type: Number, required: true },
    issuedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

certificateSchema.statics.generateSerial = function generateSerial() {
  return `DSA-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
};

module.exports = mongoose.model('Certificate', certificateSchema);
