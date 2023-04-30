import React from "react";
import { FaCheck } from "react-icons/fa";
import speech from "../assets/AI_homepage_freespeech.jpg";

const Features = () => {
  return (
    <div className="features flex flex-col sm:flex-row bg-green-100 py-12 sm:px-6 lg:px-8 xl:px-10">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-4xl text-center justify-start font-bold text-green-800 mb-4">
          Our Features
        </h2>
        <ul className="pl-6 text-base md:text-lg text-gray-800">
          <li className="mb-4 flex text-left lg:justify-center justify-start">
            <FaCheck className="text-green-800 mr-2" />
            Real-time news coverage from a global community of users
          </li>
          <li className="mb-4 flex text-left lg:justify-center justify-start">
            <FaCheck className="text-green-800 mr-2" />
            Rating system driven by registered users and creators
          </li>
          <li className="mb-4 flex text-left lg:justify-center justify-start">
            <FaCheck className="text-green-800 mr-2" />
            User-generated content for diverse and unique perspectives
          </li>
          <li className="mb-4 flex text-left lg:justify-center justify-start">
            <FaCheck className="text-green-800 mr-2" />
            No censorship, free expression for all
          </li>
          <li className="mb-4 flex text-left lg:justify-center justify-start">
            <FaCheck className="text-green-800 mr-2" />
            Location-based weighting to ensure relevance to users
          </li>
        </ul>
      </div>
      <img src={speech} alt="your-alt-text" className="h-[300px] w-full sm:w-1/2 md:pl-10 object-cover" />
    </div>
  );
};

export default Features;
