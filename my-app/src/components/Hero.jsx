import React from 'react';

const Hero = () => {
  return (
    <section className="text-black py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-4xl font-bold mb-4">Hello, I'm Virakboth</h1>
        <p className="text-lg">
          A passionate Web Developer specializing in creating amazing user experiences.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block text-blue-600 px-6 py-3 rounded-md font-bold"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
