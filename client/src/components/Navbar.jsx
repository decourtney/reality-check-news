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
      <nav className="navbar bg-gray-800 py-3 px-6 flex justify-between md:flex">
        <Link to="/" className="logo text-white font-bold text-lg flex items-center">
          <img src={logo} alt="Logo" className="mr-2 h-14" />
        </Link>
        <ul className="nav-links hidden md:flex items-center">
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
        <div onClick={toggleMenu} className="menu-icon block cursor-pointer md:hidden">
          {!menuOpen ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <div>
        <ul
          className={`nav-links md:hidden ${menuOpen ? 'block' : 'hidden'}`}
          onClick={handleMobileClick}
        >
          <li className={`text-white hover:text-gray-200 ${location.pathname === '/' ? 'text-yellow-500' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`text-white hover:text-gray-200 ${location.pathname === '/articles' ? 'text-yellow-500' : ''}`}>
            <Link to="/articles">Articles</Link>
          </li>
          <li className={`text-white hover:text-gray-200 ${location.pathname === '/contact' ? 'text-yellow-500' : ''}`}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className={`text-white hover:text-gray-200 ${location.pathname === '/signup' ? 'text-yellow-500' : ''}`}>
            <Link to="/login">Login | Register</Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
