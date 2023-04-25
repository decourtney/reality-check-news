import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';

const AboutUs = () => {
  return (
    <div>
      <Hero 
        title="About Us"
        subtitle="We are a social media platform that focuses on news coverage driven by registered users and content creators."
        buttonText="Sign Up"
        buttonLink="/signup"
        backgroundImage="about-background.jpg"
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

export default AboutUs;
