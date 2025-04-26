import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1>User Feedback System</h1>
      <p className="lead">
        Welcome to our feedback platform. We value your input and use it to improve our products and services.
      </p>
      
      <div className="action-buttons">
        <Link to="/submit" className="btn primary">
          <button>Submit Feedback</button>
        </Link>
        <Link to="/dashboard" className="btn secondary">
          <button style={{ backgroundColor: '#6c757d' }}>View Dashboard</button>
        </Link>
      </div>
      
      <div className="features">
        <div className="feature">
          <h3>Share Your Thoughts</h3>
          <p>Submit suggestions, report bugs, or request new features through our easy-to-use feedback form.</p>
        </div>
        
        <div className="feature">
          <h3>Track Feedback</h3>
          <p>View all submitted feedback in our interactive dashboard with filtering and sorting capabilities.</p>
        </div>
        
        <div className="feature">
          <h3>Make an Impact</h3>
          <p>Your feedback directly influences our development priorities and helps us improve.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;