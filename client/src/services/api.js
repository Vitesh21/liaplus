import axios from 'axios';

const API_URL = '/api';

// Get all feedback with optional filtering and sorting
export const getAllFeedback = async (filters = {}) => {
  try {
    const { category, sortBy, order } = filters;
    let queryParams = '';
    
    if (category) {
      queryParams += `category=${category}&`;
    }
    
    if (sortBy) {
      queryParams += `sortBy=${sortBy}&order=${order || 'desc'}`;
    }
    
    const response = await axios.get(`${API_URL}/feedback?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
};

// Submit new feedback
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(`${API_URL}/feedback`, feedbackData);
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

// Get feedback by ID
export const getFeedbackById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/feedback/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback by ID:', error);
    throw error;
  }
};