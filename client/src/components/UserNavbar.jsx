import React, { useState } from "react";

const NavbarMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#">Newsfeed</a>
        </li>
        <li>
          <a href="#">Notifications</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

const UserNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleMenu = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button onClick={handleToggleMenu}>
              {isLoggedIn ? "Menu" : "Login"}
            </button>
          </li>
        </ul>
      </nav>

      {isLoggedIn && <NavbarMenu />}
    </div>
  );
};

export default UserNavbar;
