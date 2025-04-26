const Feedback = require('../models/Feedback');

// @desc    Get all feedback entries with optional filtering
// @route   GET /api/feedback
// @access  Public
exports.getAllFeedback = async (req, res) => {
  try {
    const { category, sortBy, order } = req.query;
    let query = {};
    
    // Apply category filter if provided
    if (category) {
      query.category = category;
    }
    
    // Build sort options
    let sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = order === 'desc' ? -1 : 1;
    } else {
      // Default sort by timestamp descending (newest first)
      sortOptions.timestamp = -1;
    }
    
    const feedback = await Feedback.find(query).sort(sortOptions);
    
    res.status(200).json({
      success: true,
      count: feedback.length,
      data: feedback
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Submit new feedback
// @route   POST /api/feedback
// @access  Public
exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, feedbackText, category } = req.body;
    
    // Create new feedback entry
    const feedback = await Feedback.create({
      name,
      email,
      feedbackText,
      category
    });
    
    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      data: feedback
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get feedback by ID
// @route   GET /api/feedback/:id
// @access  Public
exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    
    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: 'Feedback not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: feedback
    });
  } catch (error) {
    console.error('Error fetching feedback by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};