import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 65 },
    { name: 'React', level: 70 },
    { name: 'Tailwind CSS', level: 45 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="flex flex-wrap gap-8">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              <h3 className="font-semibold text-xl mb-2">{skill.name}</h3>
              {/* Progress bar container */}
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-sm font-medium">{skill.name}</div>
                  <div className="text-sm font-medium">{skill.level}%</div>
                </div>
                {/* Progress bar */}
                <div className="flex mb-2 items-center justify-between">
                  <div
                    className="bg-gray-300 rounded-full h-2.5 w-full"
                  >
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
    </section>
  );
};

export default Skills;
