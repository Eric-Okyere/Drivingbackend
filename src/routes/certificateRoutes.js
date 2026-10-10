const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { requireSubscription } = require('../middleware/subscriptionMiddleware');
const { issueCertificate, myCertificates } = require('../controllers/certificateController');

const router = express.Router();

router.use(protect);
router.post('/', requireSubscription, issueCertificate);
router.get('/', myCertificates);

module.exports = router;
