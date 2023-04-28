// see SignupForm.js for comments
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
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
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-3xl mb-4 font-bold">Login</h2>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={userFormData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={userFormData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
