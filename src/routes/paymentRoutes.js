const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getConfig, initializePayment, verifyPayment, myPaymentHistory } = require('../controllers/paymentController');

const router = express.Router();

// Public so the pricing can be shown on the landing page before anyone logs in.
router.get('/config', getConfig);

router.use(protect);
router.post('/initialize', initializePayment);
router.post('/verify', verifyPayment);
router.get('/history', myPaymentHistory);

module.exports = router;
