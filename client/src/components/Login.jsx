import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const [login, { error, data }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...userFormData } });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col mx-auto items-center bg-gray-800 p-5 shadow-md">
      <div className="flex flex-col items-center max-w-lg">
        <h2 className="text-3xl mb-4 font-bold">Login</h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={userFormData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              value={userFormData.password}
              onChange={handleInputChange}
              placeholder="******************"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-yellow-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <p className="flex text-lg font-semibold gray-300">
            Don't have an account?{" "}
            <Link
              to="/register"
              className={`${
                showLogin
                  ? "text-blue-500 hover:bg-gray-700"
                  : "bg-yellow-500 hover:bg-yellow-500 text-white"
              } font-bold ml-2`}
              onClick={handleRegisterClick}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
