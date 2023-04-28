import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero 
        title="Home"
        subtitle="We are a social media platform that focuses on news coverage driven by registered users and content creators."
        buttonText="Sign Up"
        buttonLink="/signup"
        backgroundImage=""
      />
      <Features />
      <Reviews />
      <CallToAction 
        title="Join us today and start sharing your news stories with the world."
        buttonText="Sign Up"
        buttonLink="/signup"
      />
    </div>
  );
};

export default Home;
