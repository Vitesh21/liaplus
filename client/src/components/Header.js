import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">User Feedback System</Link>
          </div>
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/submit" onClick={() => setIsMenuOpen(false)}>Submit Feedback</Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;