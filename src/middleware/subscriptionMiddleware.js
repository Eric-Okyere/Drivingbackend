const { hasActiveSubscription, SUBSCRIPTION_PRICE_GHS } = require('../utils/subscription');

// Use after `protect`. Blocks the request with 402 Payment Required unless the logged-in
// student has an active subscription. Admins are always let through, so school staff can use
// the mock test / certificates without paying themselves.
function requireSubscription(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
  if (req.user.role === 'admin') return next();
  if (!hasActiveSubscription(req.user)) {
    return res.status(402).json({
      message: `An active Rhema Driving School subscription (GHS ${SUBSCRIPTION_PRICE_GHS}/month) is required for this.`,
      code: 'SUBSCRIPTION_REQUIRED',
    });
  }
  next();
}

module.exports = { requireSubscription };
