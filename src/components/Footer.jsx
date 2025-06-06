import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ardine Martine Nukuri. All rights reserved.</p>
        <p>Built with React and pure CSS</p>
      </div>
    </footer>
  );
};

export default Footer;