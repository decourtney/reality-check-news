import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex-col w-full h-full bg-gray-800 text-white py-6 text-center justify-center">
      <p>&copy; 2023 RealityCheck. All rights reserved.</p>
      <nav className="mt-4">
        <ul className="flex flex-col md:flex-row justify-center">
          <li className="my-2 md:my-0">
            <a href="/about" className="mx-3">
              About Us
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="/contact" className="mx-3">
              Contact Us
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="/privacy" className="mx-3">
              Privacy Policy
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="/terms" className="mx-3">
              Terms of Service
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
