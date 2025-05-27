import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "React", level: 94 },
    { name: "CSS3", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "MongoDB", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "Node.js", level: 93 },
    { name: "Express.js", level: 85 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Development Skills
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium text-white">
                {skill.name}
              </p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="absolute -top-7 right-0 text-gray-300">
                    {skill.level}%
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
