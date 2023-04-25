import React from 'react';
import { Link } from 'react-router-dom';

const UserLandingPage = ({ username }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>You are now logged in and can access all the features of our platform.</p>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};

export default UserLandingPage;
