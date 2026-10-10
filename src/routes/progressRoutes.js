const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { submitLessonQuiz, getMyProgress } = require('../controllers/progressController');

const router = express.Router();

router.use(protect);
router.get('/me', getMyProgress);
router.post('/lesson-quiz', submitLessonQuiz);

module.exports = router;
