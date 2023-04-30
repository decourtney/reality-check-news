import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-12 justify-center text-center">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-bold text-white mb-4">
          Join our community today
        </h2>
        <p className="text-white text-xl mb-8">
          Get access to real-time news coverage from people just like you all
          around the world.
        </p>
        <Link to="/register">
          <button className="bg-white text-black font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-gray-50 hover:text-gray-900 transition duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
