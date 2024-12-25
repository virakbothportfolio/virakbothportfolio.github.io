import React from 'react';
import { FaJs } from 'react-icons/fa';
import { SiScratch, SiHtml5, SiCss3, SiTailwindcss, SiReact } from "react-icons/si";

const Schools = () => {

  return (
    <section className="p-80">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Projects</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <h3 className="text-3xl font-bold mb-[50px]">Cybersecurity Website</h3>
              <p className="text-xl flex items-center">
                Technologies used: <SiHtml5 /><SiCss3 /><FaJs />
              </p>
              <p className="text-xl">A School Project I developed with my classmates</p>
            </div>
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <h3 className="text-3xl font-bold mb-[50px]">This Portfolio</h3>
              <p className="text-xl flex items-center">
                Technologies used: <SiReact /><SiCss3 /><SiTailwindcss />
              </p>
              <p className="text-xl">This very website is one of my projects, too!</p>
            </div>
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <h3 className="text-3xl font-bold mb-[50px]">Various Scratch Projects</h3>
              <p className="text-xl flex items-center">
                Technologies used: <SiScratch />
              </p>
              <p className="text-xl">Probably one of my first Coding Projects, Made during my study at <b>CS50S</b> & <b>Algorithmics</b></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Schools;
