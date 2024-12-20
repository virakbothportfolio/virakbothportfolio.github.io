import React from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">My Socials</h2>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <FaGithub className="w-10 h-10" />
          </a>
          <a
            href="https://facebook.com/your-username"
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
