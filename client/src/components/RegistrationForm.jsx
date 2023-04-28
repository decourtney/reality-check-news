import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const RegistrationForm = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Register</h1>
      <form className="flex flex-col items-center">
        <input
          className="border border-gray-500 rounded-md px-2 py-1 mb-4 w-80"
          type="text"
          name="firstName"
          value={userFormData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          className="border border-gray-500 rounded-md px-2 py-1 mb-4 w-80"
          type="text"
          name="lastName"
          value={userFormData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
        />
        <input
          className="border border-gray-500 rounded-md px-2 py-1 mb-4 w-80"
          type="email"
          name="email"
          value={userFormData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          className="border border-gray-500 rounded-md px-2 py-1 mb-4 w-80"
          type="text"
          name="username"
          value={userFormData.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
        />
        <input
          className="border border-gray-500 rounded-md px-2 py-1 mb-4 w-80"
          type="password"
          name="password"
          value={userFormData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegistrationForm;
