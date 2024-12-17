import React from 'react';
import face from '../assets/images/virakboth.png';

const Hero = () => {
  return (
    <section>
      <div className="text-black text-center">
        <div className="m-[150px]">
          <div className="flex items-center justify-center">
            <img
            src={face}
            alt="Virakboth's Face" 
            className="h-[500px] rounded-full border-4 border-gray-200 shadow-lg object-cover"
            />
          </div>
          <h1 className="inline-block text-9xl font-bold">
            Hello, I'm
          </h1>
          <h1 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 text-9xl font-bold m-[20px]">
            Virakboth
          </h1>
          <p className="text-2xl">
            A passionate cambodian Front-End Developer that studied web development since 2023
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
