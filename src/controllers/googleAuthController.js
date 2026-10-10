const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const { signToken } = require('../utils/token');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null;

/**
 * POST /api/auth/google
 * Body: { credential } — the ID token string returned by Google Identity Services
 * on the frontend (google.accounts.id "Sign in with Google" button).
 *
 * We verify the token's signature, audience (our Client ID) and expiry with Google's
 * own library rather than trusting the frontend, then find-or-create a local user and
 * issue our own JWT so the rest of the app (auth middleware, /auth/me, etc.) works
 * exactly the same way it does for password accounts.
 */
async function googleLogin(req, res, next) {
  try {
    if (!GOOGLE_CLIENT_ID || !client) {
      return res.status(500).json({
        message:
          'Google Sign-In is not configured on the server yet. Set GOOGLE_CLIENT_ID in the backend .env.',
      });
    }

    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ message: 'Missing Google credential' });
    }

    let payload;
    try {
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: GOOGLE_CLIENT_ID,
      });
      payload = ticket.getPayload();
    } catch {
      return res.status(401).json({ message: 'Invalid or expired Google credential' });
    }

    if (!payload || !payload.email) {
      return res.status(401).json({ message: 'Google account has no verifiable email' });
    }
    if (!payload.email_verified) {
      return res.status(401).json({ message: 'Google email is not verified' });
    }

    const email = payload.email.toLowerCase();
    const googleId = payload.sub;

    let user = await User.findOne({ $or: [{ googleId }, { email }] });

    if (!user) {
      user = await User.create({
        name: payload.name || email.split('@')[0],
        email,
        googleId,
        authProvider: 'google',
      });
    } else if (!user.googleId) {
      // An account with this email already exists (registered with a password) — link it.
      user.googleId = googleId;
      await user.save();
    }

    // Same streak/last-active bookkeeping as password login.
    const today = new Date();
    const last = user.lastActiveDate ? new Date(user.lastActiveDate) : null;
    if (last) {
      const diffDays = Math.floor(
        (today.setHours(0, 0, 0, 0) - new Date(last).setHours(0, 0, 0, 0)) / 86400000
      );
      if (diffDays === 1) user.streakCount += 1;
      else if (diffDays > 1) user.streakCount = 1;
    } else {
      user.streakCount = 1;
    }
    user.longestStreak = Math.max(user.longestStreak, user.streakCount);
    user.lastActiveDate = new Date();
    await user.save();

    const token = signToken(user);
    res.json({ token, user: user.toSafeJSON() });
  } catch (err) {
    next(err);
  }
}

module.exports = { googleLogin };
