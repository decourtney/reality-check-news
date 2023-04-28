import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-6 text-center justify-center">
      <p>&copy; 2023 RealityCheck. All rights reserved.</p>
      <nav>
        <ul className="flex justify-center mt-4">
          <li><a href="/about" className="mx-3">About Us</a></li>
          <li><a href="/contact" className="mx-3">Contact Us</a></li>
          <li><a href="/privacy" className="mx-3">Privacy Policy</a></li>
          <li><a href="/terms" className="mx-3">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
