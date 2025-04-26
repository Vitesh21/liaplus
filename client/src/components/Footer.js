import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} User Feedback System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;