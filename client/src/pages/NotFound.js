import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p className="lead">The page you are looking for does not exist.</p>
      <Link to="/" className="btn primary">
        <button>Return to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;