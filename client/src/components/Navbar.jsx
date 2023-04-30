import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/realitychecklogo.svg';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMobileClick = () => setMenuOpen(false);

  return (
    <>
      {/* menu */}
      <nav className="navbar flex bg-gray-800 items-center p-4">
        <Link to="/" className="logo text-white font-bold text-lg flex items-center justify-start">
          <img src={logo} alt="Logo" className="mr-2 h-14" />
        </Link>
        <ul className="nav-links hidden md:flex justify-end ml-auto">
          <li className={`mr-6 text-white hover:text-gray-200 ${location.pathname === '/' ? 'text-yellow-500' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`mr-6 text-white hover:text-gray-200 ${location.pathname === '/articles' ? 'text-yellow-500' : ''}`}>
            <Link to="/articles">Articles</Link>
          </li>
          <li className={`mr-6 text-white hover:text-gray-200 ${location.pathname === '/contact' ? 'text-yellow-500' : ''}`}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className={`mr-6 text-white hover:text-gray-200 ${location.pathname === '/login' ? 'text-yellow-500' : ''}`}>
            <Link to="/login">Login | Register</Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div onClick={toggleMenu} className="menu-icon block cursor-pointer md:hidden ml-auto">
          {!menuOpen ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`nav-links md:hidden fixed top-0 left-0 w-screen h-screen bg-gray-800 text-white ${
            menuOpen ? 'flex flex-col items-center justify-center' : 'hidden'
          }`}
          onClick={handleMobileClick}
        >
          <ul>
            <li className={`text-white font-bold text-lg mb-6 ${location.pathname === '/' ? 'text-yellow-500' : ''}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`text-white font-bold text-lg mb-6 ${location.pathname === '/articles' ? 'text-yellow-500' : ''}`}>
              <Link to="/articles">Articles</Link>
            </li>
            <li className={`text-white font-bold text-lg mb-6 ${location.pathname === '/contact' ? 'text-yellow-500' : ''}`}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className={`text-white font-bold text-lg mb-6 ${location.pathname === '/signup' ? 'text-yellow-500' : ''}`}>
              <Link to="/login">Login | Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;