const express = require('express');
const { protect, requireAdmin } = require('../middleware/authMiddleware');
const {
  createLesson,
  updateLesson,
  deleteLesson,
  listAllLessons,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  listQuestionsForLessonAdmin,
  listStudents,
  listPayments,
  activateSubscription,
  revokeSubscription,
} = require('../controllers/adminController');

const router = express.Router();

router.use(protect, requireAdmin);

router.get('/lessons', listAllLessons);
router.post('/lessons', createLesson);
router.put('/lessons/:id', updateLesson);
router.delete('/lessons/:id', deleteLesson);

router.get('/lessons/:lessonId/questions', listQuestionsForLessonAdmin);
router.post('/questions', createQuestion);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);

router.get('/students', listStudents);

router.get('/payments', listPayments);
router.post('/students/:id/activate-subscription', activateSubscription);
router.post('/students/:id/revoke-subscription', revokeSubscription);

module.exports = router;
