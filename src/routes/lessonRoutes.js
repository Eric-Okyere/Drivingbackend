const express = require('express');
const { listLessons, getLesson } = require('../controllers/lessonController');
const optionalAuth = require('../middleware/optionalAuth');

const router = express.Router();

router.get('/', optionalAuth, listLessons);
router.get('/:slug', optionalAuth, getLesson);

module.exports = router;
