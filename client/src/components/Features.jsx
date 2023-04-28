import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="features container text-center justify-center bg-green-100 py-12 px-4 sm:px-6 lg:px-8 xl:px-10">
      <h2 className="text-4xl font-bold text-green-800 mb-4">Our Features</h2>
      <ul className="pl-6 items-center text-lg text-gray-800">
        <li className="mb-4 flex text-center justify-center sm:justify-start"><FaCheck className="text-green-800 mr-2" />Real-time news coverage from a global community of users</li>
        <li className="mb-4 flex text-center justify-center sm:justify-start"><FaCheck className="text-green-800 mr-2" />Rating system driven by registered users and creators</li>
        <li className="mb-4 flex text-center justify-center sm:justify-start"><FaCheck className="text-green-800 mr-2" />User-generated content for diverse and unique perspectives</li>
        <li className="mb-4 flex text-center justify-center sm:justify-start"><FaCheck className="text-green-800 mr-2" />No censorship, free expression for all</li>
        <li className="mb-4 flex text-center justify-center sm:justify-start"><FaCheck className="text-green-800 mr-2" />Location-based weighting to ensure relevance to users</li>
      </ul>
    </div>
  );
};

export default Features;
