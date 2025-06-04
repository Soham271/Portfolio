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
    { name: "Docker", level: 75 },
    { name: "MySQL", level: 82 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-10 lg:gap-20 px-6 py-12 max-w-7xl mx-auto">
        <div className="w-full">
          <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4 mb-8">
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x">
                Development Skills
              </h2>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <div className="absolute -bottom-4 left-2 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"></div>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mt-4">
              A showcase of my technical expertise, honed through hands-on
              experience and continuous learning in cutting-edge technologies.
            </p>
          </div>

          <div className="relative mt-6 lg:mt-14 w-full">
            <div className="ml-16 space-y-12">
              {skills.map((skill, index) => (
                <div key={skill.name} className="relative">
                  <div className="transform hover:scale-[1.02] transition-transform duration-300">
                    <p className="text-sm uppercase font-medium text-white">
                      {skill.name}
                    </p>
                    <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                      <motion.span
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="absolute -top-7 right-0 text-gray-300">
                          {skill.level}%
                        </span>
                      </motion.span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default Skills;
