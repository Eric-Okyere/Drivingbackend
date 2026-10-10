const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    amountGHS: { type: Number, required: true },
    currency: { type: String, default: 'GHS' },
    method: { type: String, enum: ['paystack', 'manual'], required: true },
    status: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending', index: true },
    // Paystack transaction reference (unique per attempt). Not set for manual activations.
    reference: { type: String, unique: true, sparse: true, index: true },
    periodStart: { type: Date },
    periodEnd: { type: Date },
    note: { type: String, default: '' }, // e.g. "Paid cash at school, marked by admin"
    activatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // admin, for manual payments
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);
