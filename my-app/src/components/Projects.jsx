import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project 1', description: 'Description of project 1.' },
    { name: 'Project 2', description: 'Description of project 2.' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-md"
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
