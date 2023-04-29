import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/realitychecklogo.svg';

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 py-3 px-6 flex items-center justify-between">
      <Link to="/" className="logo text-white font-bold text-lg flex items-center">
        <img src={logo} alt="Logo" className="mr-2 h-full bg-transparent" />
      </Link>
      <ul className="nav-links flex items-center">
        <li className='mr-6 text-white hover:text-gray-200'><Link to="/">Home</Link></li>
        <li className='mr-6 text-white hover:text-gray-200'><Link to="/articles">Articles</Link></li>
        <li className='mr-6 text-white hover:text-gray-200'><Link to="/contact">Contact Us</Link></li>
        <li className="mr-6 text-white hover:text-gray-200"><Link to="/signup">Sign Up</Link></li>
        <li className="mr-6 text-white hover:text-gray-200"><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
