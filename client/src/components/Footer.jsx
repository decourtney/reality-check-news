import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2022 My News App. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
