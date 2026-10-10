const { verifyToken } = require('../utils/token');
const User = require('../models/User');

// Like `protect`, but never rejects the request — just attaches req.user if a valid token is present.
async function optionalAuth(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return next();

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.sub);
    if (user) req.user = user;
  } catch (err) {
    // ignore invalid token for optional auth
  }
  next();
}

module.exports = optionalAuth;
