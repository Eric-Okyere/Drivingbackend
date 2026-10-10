const MockTestResult = require('../models/MockTestResult');
const Certificate = require('../models/Certificate');
const { MOCK_TEST_PASS_PERCENT } = require('./mockTestController');

// Issues a certificate for a passed mock test (idempotent per mock test result).
async function issueCertificate(req, res, next) {
  try {
    const { mockResultId } = req.body;
    const mockResult = await MockTestResult.findOne({ _id: mockResultId, user: req.user._id });
    if (!mockResult) return res.status(404).json({ message: 'Mock test result not found' });
    if (!mockResult.passed) {
      return res.status(400).json({ message: `A score of at least ${MOCK_TEST_PASS_PERCENT}% is required for a certificate` });
    }

    let certificate = await Certificate.findOne({ mockTestResult: mockResult._id });
    if (!certificate) {
      certificate = await Certificate.create({
        user: req.user._id,
        mockTestResult: mockResult._id,
        serialNumber: Certificate.generateSerial(),
        licenseClassGoal: req.user.licenseClassGoal,
        scorePercent: mockResult.scorePercent,
      });
    }

    res.status(201).json({ certificate });
  } catch (err) {
    next(err);
  }
}

async function myCertificates(req, res, next) {
  try {
    const certificates = await Certificate.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ certificates });
  } catch (err) {
    next(err);
  }
}

module.exports = { issueCertificate, myCertificates };
