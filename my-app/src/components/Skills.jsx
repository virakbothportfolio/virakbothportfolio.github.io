import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
