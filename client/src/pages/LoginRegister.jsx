import React, { useState } from "react";
import Login from "../components/Login";
import RegistrationForm from "../components/RegistrationForm";

const LoginRegister = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 max-w-md w-full">
        {showLogin ? (
          <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <Login handleRegisterClick={handleRegisterClick} />
          </div>
        ) : (
          <div className="shadow-md rounded px-8 pt-6 pb-8">
            <RegistrationForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
