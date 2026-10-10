const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { requireSubscription } = require('../middleware/subscriptionMiddleware');
const { startMockTest, submitMockTest, myMockTestHistory } = require('../controllers/mockTestController');

const router = express.Router();

router.use(protect);
router.get('/start', requireSubscription, startMockTest);
router.post('/submit', requireSubscription, submitMockTest);
router.get('/history', myMockTestHistory);

module.exports = router;
