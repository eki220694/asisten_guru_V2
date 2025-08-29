// routes/assessmentRoutes.js
const express = require('express');
const router = express.Router();
const assessmentController = require('../controllers/assessmentController');

router.post('/', assessmentController.createAssessment);
router.get('/', assessmentController.getAssessments);

module.exports = router;