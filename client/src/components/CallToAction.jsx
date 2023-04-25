import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-bold text-white mb-4">
          Join our community today
        </h2>
        <p className="text-white text-xl mb-8">
          Get access to real-time news coverage from people just like you all around the world.
        </p>
        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
