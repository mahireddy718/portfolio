import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Dandhu Mahendra Reddy. All rights reserved.</p>
        <p className="footer-built">Built with React, Vite & Passion</p>
      </div>
    </footer>
  );
};

export default Footer;
