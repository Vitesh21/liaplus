import React, { useState, useEffect } from 'react';
import { getAllFeedback } from '../services/api';

const Dashboard = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    sortBy: 'timestamp',
    order: 'desc'
  });

  useEffect(() => {
    fetchFeedback();
  }, [filters]);

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      const response = await getAllFeedback(filters);
      setFeedbackList(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch feedback data. Please try again later.');
      console.error('Error fetching feedback:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (e) => {
    setFilters(prev => ({
      ...prev,
      category: e.target.value
    }));
  };

  const handleSortChange = (e) => {
    setFilters(prev => ({
      ...prev,
      sortBy: e.target.value
    }));
  };

  const handleOrderChange = (e) => {
    setFilters(prev => ({
      ...prev,
      order: e.target.value
    }));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getCategoryClass = (category) => {
    switch (category) {
      case 'bug report':
        return 'category-bug';
      case 'feature request':
        return 'category-feature';
      default:
        return 'category-suggestion';
    }
  };

  return (
    <div className="dashboard-page">
      <h1>Feedback Dashboard</h1>
      <p className="lead">Browse and filter user feedback</p>
      
      <div className="dashboard-controls">
        <div className="filter-group">
          <label htmlFor="category-filter">Filter by:</label>
          <select
            id="category-filter"
            value={filters.category}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="suggestion">Suggestions</option>
            <option value="bug report">Bug Reports</option>
            <option value="feature request">Feature Requests</option>
          </select>
        </div>
        
        <div className="sort-group">
          <label htmlFor="sort-by">Sort by:</label>
          <select
            id="sort-by"
            value={filters.sortBy}
            onChange={handleSortChange}
          >
            <option value="timestamp">Date</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
          
          <select
            id="sort-order"
            value={filters.order}
            onChange={handleOrderChange}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>
      
      {loading && <p>Loading feedback data...</p>}
      
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && feedbackList.length === 0 && (
        <p>No feedback entries found. Be the first to submit feedback!</p>
      )}
      
      {!loading && !error && feedbackList.length > 0 && (
        <div className="feedback-list">
          {feedbackList.map(feedback => (
            <div key={feedback._id} className="feedback-card">
              <div className="feedback-header">
                <span className={`feedback-category ${getCategoryClass(feedback.category)}`}>
                  {feedback.category}
                </span>
                <span className="feedback-meta">
                  {formatDate(feedback.timestamp)}
                </span>
              </div>
              
              <h3>{feedback.name}</h3>
              <p className="feedback-email">{feedback.email}</p>
              <p className="feedback-text">{feedback.feedbackText}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;