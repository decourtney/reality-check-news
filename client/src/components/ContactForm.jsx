import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    setEmailError(!validateEmail(currentEmail));
  };
  return (
    <div className="flex justify-center items-center p-4 pb-6 ">
      <form
        action="https://getform.io/f/a71ead77-8361-482f-aadf-faf72ebee6d9"
        method="POST"
        className="bg-gray-800 border-yellow-500 border-rounded-lg p-7 flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Contact
          </p>
          <p className="text-lg font-semibold gray-300 py-4">
            Submit the form below to contact one of our hard working employees.
          </p>
        </div>
        <input
          className="text-white p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={`w-full p-2 border text-white ${
            emailError ? "border-red-500" : "border-gray-300"
          } rounded`}
          type="email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          placeholder="Email"
        />
        <textarea
          className=" text-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="border-yellow-500 bg-yellow-500 font-bold border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-gray-500 hover:border-gray-500"
          type="submit"
        >
          Let's Chat!
        </button>
      </form>
    </div>
  );
};

export default Contact;
