import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
  return (
    <div>
      <Hero 
        title="Contact Us"
        subtitle="Have a question or suggestion? Reach out to us and we'll get back to you as soon as possible."
        backgroundImage="contact-background.jpg"
      />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
