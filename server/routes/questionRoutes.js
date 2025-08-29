// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/generate', questionController.generateQuestions);
router.get('/', questionController.getQuestions);

module.exports = router;