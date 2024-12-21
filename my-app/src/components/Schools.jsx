import React from 'react';
import { FaJs } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiScratch, SiPython } from "react-icons/si";

const Projects = () => {

  return (
    <section className="p-80">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Schools & Courses</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <h3 className="text-3xl font-bold mb-[50px]">SnoopEdu</h3>
              <p className="text-xl flex items-center">
                Learned: <SiHtml5 /><SiCss3 /><FaJs />
              </p>
              <p className="text-xl">Learned how to build proper Websites here</p>
              <a href="https://snoopedu.com" className="font-bold text-b">
                Their Website
              </a>
            </div>
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <h3 className="text-3xl font-bold mb-[50px]">Algorithmics</h3>
              <p className="text-xl flex items-center">
                Learned: <SiScratch /><SiPython />
              </p>
              <p className="text-xl">My First Course related to Coding</p>
              <a href="https://algorithmicschool.com" className="font-bold text-b">
                Their Website
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
