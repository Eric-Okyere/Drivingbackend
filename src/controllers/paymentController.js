const crypto = require('crypto');
const Payment = require('../models/Payment');
const { verifyTransaction } = require('../utils/paystack');
const { SUBSCRIPTION_PRICE_GHS, SUBSCRIPTION_PERIOD_DAYS } = require('../utils/subscription');

// Public config the frontend needs before it can render the subscribe page / Paystack button.
function getConfig(req, res) {
  res.json({
    priceGHS: SUBSCRIPTION_PRICE_GHS,
    periodDays: SUBSCRIPTION_PERIOD_DAYS,
    currency: 'GHS',
  });
}

// Step 1: create a pending payment record and a unique reference the frontend hands to the
// Paystack Inline popup. No money has moved yet — this just reserves a reference we can verify.
async function initializePayment(req, res, next) {
  try {
    const reference = `rhema_${req.user._id}_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    await Payment.create({
      user: req.user._id,
      amountGHS: SUBSCRIPTION_PRICE_GHS,
      method: 'paystack',
      status: 'pending',
      reference,
    });

    res.json({
      reference,
      amountGHS: SUBSCRIPTION_PRICE_GHS,
      amountPesewas: Math.round(SUBSCRIPTION_PRICE_GHS * 100),
      email: req.user.email,
    });
  } catch (err) {
    next(err);
  }
}

// Step 2: once the Paystack popup reports success client-side, we independently verify the
// transaction server-side before ever extending the subscription — never trust the client alone.
async function verifyPayment(req, res, next) {
  try {
    const { reference } = req.body;
    if (!reference) return res.status(400).json({ message: 'reference is required' });

    const payment = await Payment.findOne({ reference, user: req.user._id });
    if (!payment) return res.status(404).json({ message: 'Payment record not found' });

    if (payment.status === 'success') {
      return res.json({ alreadyVerified: true, user: req.user.toSafeJSON() });
    }

    if (!process.env.PAYSTACK_SECRET_KEY) {
      return res.status(500).json({
        message: 'Payment verification is not configured on the server yet (missing PAYSTACK_SECRET_KEY).',
      });
    }

    const verifyResult = await verifyTransaction(reference);
    const txn = verifyResult?.data;
    if (!verifyResult?.status || txn?.status !== 'success') {
      payment.status = 'failed';
      await payment.save();
      return res.status(402).json({
        message: 'Payment could not be verified as successful.',
        gatewayResponse: txn?.gateway_response,
      });
    }

    // Guard against a tampered client-side amount: compare what Paystack actually confirms was
    // paid (in pesewas) against what we expected when the payment was initialized.
    const expectedPesewas = Math.round(payment.amountGHS * 100);
    if (typeof txn.amount === 'number' && txn.amount < expectedPesewas) {
      payment.status = 'failed';
      await payment.save();
      return res.status(402).json({ message: 'Amount paid does not match the subscription price.' });
    }

    const now = new Date();
    const user = req.user;
    const base = user.subscriptionExpiresAt && user.subscriptionExpiresAt > now ? user.subscriptionExpiresAt : now;
    const periodEnd = new Date(base.getTime() + SUBSCRIPTION_PERIOD_DAYS * 24 * 60 * 60 * 1000);

    payment.status = 'success';
    payment.periodStart = base;
    payment.periodEnd = periodEnd;
    await payment.save();

    user.subscriptionExpiresAt = periodEnd;
    await user.save();

    res.json({ success: true, user: user.toSafeJSON() });
  } catch (err) {
    next(err);
  }
}

async function myPaymentHistory(req, res, next) {
  try {
    const history = await Payment.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(20);
    res.json({ history });
  } catch (err) {
    next(err);
  }
}

module.exports = { getConfig, initializePayment, verifyPayment, myPaymentHistory };
