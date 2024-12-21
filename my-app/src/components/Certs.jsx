import React from 'react';
import csx from '../assets/certs/cs50.png';
import css from '../assets/certs/cs50s.png';
import csp from '../assets/certs/cs50p.png';
import Certificate from './Certificate';

const Certs = () => {
  return (
    <section className="p-80">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Certificates</h2>
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <Certificate
              image={csx}
              url="https://cs50.harvard.edu/certificates/9d966695-a4b6-4154-9952-52e4d2efa692"
              altText="CS50S Certificate Thumbnail"
            />
            <Certificate
              image={css}
              url="https://cs50.harvard.edu/certificates/a06a26e2-64e9-438a-8666-977af8d062ed"
              altText="CS50S Certificate Thumbnail"
            />
            <Certificate
              image={csp}
              url="https://cs50.harvard.edu/certificates/7226859c-c657-4563-b9c8-99f4873114f6"
              altText="CS50S Certificate Thumbnail"
            />
        </div>
      </div>
    </section>
  );
};

export default Certs;
