import React, { useState } from 'react';
import { csx, css, csp, jhu, m1, m2, m3, m4, m5, m6, m7, m8, cc, p1, p2, p3 } from '../assets/certs';
import Certificate from './Certificate';

const Certs = () => {
  const [activeCategory, setActiveCategory] = useState('cs50');

  // Certificate arrays
  const cs50Certs = [
    { image: csx, url: 'https://cs50.harvard.edu/certificates/9d966695-a4b6-4154-9952-52e4d2efa692', altText: 'CS50x Certificate' },
    { image: css, url: 'https://cs50.harvard.edu/certificates/a06a26e2-64e9-438a-8666-977af8d062ed', altText: 'CS50S Certificate' },
    { image: csp, url: 'https://cs50.harvard.edu/certificates/7226859c-c657-4563-b9c8-99f4873114f6', altText: 'CS50P Certificate' },
  ];

  const webCerts = [
    { image: jhu, url: 'https://www.coursera.org/account/accomplishments/certificate/8DILH4N0ABM6', altText: 'JHU Web Dev Certificate' },
    { image: m1, url: 'https://www.coursera.org/account/accomplishments/certificate/MMU2WMZEKWOA', altText: 'Meta Front-End Intro Certificate' },
    { image: m2, url: 'https://www.coursera.org/account/accomplishments/certificate/LO2FMY48V1BX', altText: 'Meta JavaScript Certificate' },
    { image: m3, url: 'https://www.coursera.org/account/accomplishments/certificate/4NSF48QD3FIS', altText: 'Meta Version Control Certificate' },
    { image: m4, url: 'https://www.coursera.org/account/accomplishments/certificate/0RAM91AXMKNF', altText: 'Meta HTML CSS Depth Certificate' },
    { image: m5, url: 'https://www.coursera.org/account/accomplishments/certificate/SFY4SH8WP7J0', altText: 'Meta React Basics Certificate' },
    { image: m6, url: 'https://www.coursera.org/account/accomplishments/certificate/Z5OHBQ707WJW', altText: 'Meta React Advanced Certificate' },
    { image: m7, url: 'https://www.coursera.org/account/accomplishments/certificate/QNQLDDB6CYAT', altText: 'Meta UX UI Certificate' },
    { image: m8, url: 'https://www.coursera.org/account/accomplishments/certificate/MGPD0EVNC2FY', altText: 'Meta Capstone Certificate' },
  ];

  const otherCerts = [
    { image: cc, url: 'https://codecombat.com/certificates/6533825122ab2d0031d4ba79', altText: 'CodeCombat Certificate' },
    { image: p1, url: 'https://www.coursera.org/account/accomplishments/certificate/NTMXA8WACBNQ', altText: 'UOM Python Intro Certificate' },
    { image: p2, url: 'https://www.coursera.org/account/accomplishments/certificate/Z47RD2HY9PYR', altText: 'UOM Python Data Certificate' },
    { image: p3, url: 'https://www.coursera.org/account/accomplishments/certificate/MTNK7QQL6XA3', altText: 'UOM Python Web Data Certificate' },
  ];

  // Render certificates based on active category
  const renderCertificates = () => {
    let certificates = [];
    if (activeCategory === 'cs50') {
      certificates = cs50Certs;
    } else if (activeCategory === 'web') {
      certificates = webCerts;
    } else if (activeCategory === 'other') {
      certificates = otherCerts;
    }
    return certificates.map((cert, index) => (
      <Certificate
        key={index}
        image={cert.image}
        url={cert.url}
        altText={cert.altText}
      />
    ));
  };

  return (
    <section className="p-80">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Certificates</h2>
        {/* Buttons to switch categories */}
        <div className="flex space-x-4 mb-6 justify-center">
          <button
            className={`px-4 py-2 rounded ${activeCategory === 'cs50' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory('cs50')}
          >
            CS50
          </button>
          <button
            className={`px-4 py-2 rounded ${activeCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory('web')}
          >
            Web Dev & Meta
          </button>
          <button
            className={`px-4 py-2 rounded ${activeCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory('other')}
          >
            Other
          </button>
        </div>
        {/* Certificate grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {renderCertificates()}
        </div>
      </div>
    </section>
  );
};

export default Certs;
