import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="text-black text-center">
        <div className="m-[150px]">
          <h1 className="inline-block text-9xl font-bold">
            Hello, I'm
          </h1>
          <h1 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 text-9xl font-bold m-[20px]">
            Virakboth
          </h1>
          <p className="text-xl">
            A passionate Web Developer specializing in creating amazing user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
