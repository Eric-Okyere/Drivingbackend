const express = require('express');
const { getQuestionsForLesson, submitAnswer } = require('../controllers/questionController');

const router = express.Router();

router.get('/lesson/:slug', getQuestionsForLesson);
router.post('/answer', submitAnswer);

module.exports = router;
