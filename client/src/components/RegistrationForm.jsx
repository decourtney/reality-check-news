import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
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
    <>
      <div className="flex justify-center items-center p-5 shadow-md">
        <form className="bg-gray-800 border-yellow-500 border-rounded-lg p-7 flex flex-col max-w-[600px] w-full">
          <div className="pb-4">
            <h1 className="text-4xl font-bold inline border-b-4 border-yellow-500">
              Register
            </h1>
            <p className="text-lg font-semibold gray-300 py-4">
              Create an account to join our community and share your stories
              with the world.{" "}
            </p>
          </div>
          <input
            className="p-2"
            type="text"
            name="firstName"
            value={userFormData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            required
          />
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
            value={userFormData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            required
          />
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={userFormData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            value={userFormData.username}
            onChange={handleInputChange}
            placeholder="Username"
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={userFormData.password}
            onChange={handleInputChange}
            placeholder="******************"
            required
          />
          <button
            className="border-yellow-500 bg-yellow-500 font-bold border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-gray-500 hover:border-gray-500"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
