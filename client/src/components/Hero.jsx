import React from 'react';

const Hero = () => {
  return (
    <div className="hero text-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-2">News that hits you like a slap in the face.</h1>
      <p className="text-lg text-white mb-4">Welcome to our social media platform that focuses on news coverage driven by registered users and content creators.</p>
      <button className="bg-white text-black font-semibold py-2 px-4 border border-transparent rounded hover:bg-gray-50 shadow-sm transition duration-300">Sign Up</button>
    </div>
  );
};

export default Hero;
