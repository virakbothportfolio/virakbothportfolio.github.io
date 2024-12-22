import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CSCerts from './CSCerts';

const Certs = () => {
  return (
    <>
    <section className="p-80">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Certificates</h2>
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Link to="/cscerts">CS50</Link>
        </div>
      </div>
    </section>
    <Routes>
      <Route path="/cscerts" element={<CSCerts />}/>
    </Routes>
    </>
  );
};

export default Certs;
