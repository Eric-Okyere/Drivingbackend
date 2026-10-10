const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { issueCertificate, myCertificates } = require('../controllers/certificateController');

const router = express.Router();

router.use(protect);
router.post('/', issueCertificate);
router.get('/', myCertificates);

module.exports = router;
