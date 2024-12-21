import React from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-80">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">My Socials</h2>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://github.com/VirakbothSoth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaGithub className="w-10 h-10" />
          </a>
          <a
            href="https://facebook.com/VirakbothSothSam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaFacebook className="w-10 h-10" />
          </a>
        </div>
        <p className="mt-8">
          My Email: <span className="text-blue-600">virakbothsoth@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
