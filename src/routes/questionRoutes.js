const express = require('express');
const { getQuestionsForLesson, submitAnswer } = require('../controllers/questionController');
const optionalAuth = require('../middleware/optionalAuth');

const router = express.Router();

router.get('/lesson/:slug', optionalAuth, getQuestionsForLesson);
router.post('/answer', optionalAuth, submitAnswer);

module.exports = router;
