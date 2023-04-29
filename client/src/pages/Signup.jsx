// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import RegistrationForm from '../components/RegistrationForm';

// const Signup = ({ handleLogin }) => {
//   const [showRegistrationForm, setShowRegistrationForm] = useState(false);

//   const handleShowRegistrationForm = () => {
//     setShowRegistrationForm(true);
//   };

//   return (
//     <div className="container mx-auto py-10">
//       <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
//         <h2 className="text-2xl font-bold mb-5">Join Our Community</h2>
//         <p className="mb-5">
//           Create an account to join our community and share your stories with the world.
//         </p>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5"
//           onClick={handleShowRegistrationForm}
//         >
//           Sign Up
//         </button>
//         <p>
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-500 hover:text-blue-700">
//             Login
//           </Link>
//         </p>
//       </div>
//       {showRegistrationForm && <RegistrationForm handleLogin={handleLogin} />}
//     </div>
//   );
// };

// export default Signup;

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
      <div className="flex flex-col max-w-md mx-auto bg-gray-800 p-5 shadow-md">
        <h2 className="text-2xl font-bold mb-5">Join Our Community</h2>{" "}
        <p className="mb-5">
          Create an account to join our community and share your stories with
          the world.{" "}
        </p>
        
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-8">Register</h1>
          <form className="flex flex-col items-center space-y-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstName"
              value={userFormData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastName"
              value={userFormData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={userFormData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
      </div>
    </>
  );
};

export default Signup;
