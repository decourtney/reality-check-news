import React, { useState } from 'react';

const reviewData = [
  // reviews data
];

const Reviews = ({ isVisible }) => {
  return (
    <div className={`text-gray-600 justify-center pt-10 pb-15 px-4 md:px-8 lg:px-16 drop-shadow-md ${isVisible ? 'block' : 'hidden'}`}>
      {/* reviews component contents */}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        {/* navbar contents */}
        <div onClick={toggleMenu} className="menu-icon">
          {/* menu icon contents */}
        </div>
        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          {/* nav links contents */}
        </div>
      </nav>
      <Reviews isVisible={!menuOpen} />
    </>
  );
};

export default Navbar;
