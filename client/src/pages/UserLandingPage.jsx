import React from 'react';
import { Link } from 'react-router-dom';

const UserLandingPage = ({ username }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-2xl font-bold mb-2">John Doe</h1>
      <p className="text-gray-600 mb-4">
        I'm a software engineer with a passion for creating great products that
        people love to use.
      </p>
      <div className="flex items-center mb-2">
        <svg
          className="fill-current text-gray-600 h-4 w-4 mr-2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 15.75a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z" />
        </svg>
        <p className="text-gray-600">New York City</p>
      </div>
      <div className="flex items-center">
        <svg
          className="fill-current text-gray-600 h-4 w-4 mr-2"
          viewBox="0 0 24 24"
        >
          <path d="M21 3h-6a3 3 0 0 0-3 3v1.49A7 7 0 0 0 5 15.46V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2.54a7 7 0 0 0-5-6.97V6a1 1 0 0 0-1-1zM12 18a5 5 0 1 1 5-5 5 5 0 0 1-5 5z" />
        </svg>
        <a
          className="text-blue-600 hover:text-blue-800"
          href="https://johndoe.com"
        >
          johndoe.com
        </a>
      </div>
    </div>
  );
};

export default UserLandingPage;
