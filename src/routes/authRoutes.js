const express = require('express');
const { register, login, me } = require('../controllers/authController');
const { googleLogin } = require('../controllers/googleAuthController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google', googleLogin);
router.get('/me', protect, me);

module.exports = router;
