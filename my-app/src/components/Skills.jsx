import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 80 },
    { name: 'C', level: 45 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 65 },
    { name: 'React (Learning)', level: 50 },
    { name: 'Tailwind CSS (Learning)', level: 45 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center font-bold mb-6">Skills</h2>
        {/* Flex container to center the list */}
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-blue-600 text-white rounded-md text-center"
              >
                <h3 className="font-semibold text-3xl mb-2">{skill.name}</h3>
                {/* Progress bar container */}
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-sm font-medium">{skill.name}</div>
                    <div className="text-sm font-medium">{skill.level}%</div>
                  </div>
                  {/* Progress bar */}
                  <div className="flex mb-2 items-center justify-between">
                    <div className="bg-gray-300 rounded-full h-2.5 w-full">
                      <div
                        className={`bg-blue-500 h-2.5 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
