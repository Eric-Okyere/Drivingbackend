const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { startMockTest, submitMockTest, myMockTestHistory } = require('../controllers/mockTestController');

const router = express.Router();

router.use(protect);
router.get('/start', startMockTest);
router.post('/submit', submitMockTest);
router.get('/history', myMockTestHistory);

module.exports = router;
