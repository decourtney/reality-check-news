import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const Signup = ({ handleLogin }) => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleShowRegistrationForm = () => {
    setShowRegistrationForm(true);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-5">Join Our Community</h2>
        <p className="mb-5">
          Create an account to join our community and share your stories with the world.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5"
          onClick={handleShowRegistrationForm}
        >
          Sign Up
        </button>
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
      {showRegistrationForm && <RegistrationForm handleLogin={handleLogin} />}
    </div>
  );
};

export default Signup;
