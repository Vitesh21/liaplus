const express = require('express');
const router = express.Router();
const { getAllFeedback, submitFeedback, getFeedbackById } = require('../controllers/feedbackController');

// GET all feedback with optional filtering
router.get('/', getAllFeedback);

// GET single feedback by ID
router.get('/:id', getFeedbackById);

// POST new feedback
router.post('/', submitFeedback);

module.exports = router;