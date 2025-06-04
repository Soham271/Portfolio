import React from "react";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import Title from "../layouts/Title";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
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

      <div className="relative z-10">
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          {/* Job Auto Filler Project */}
          <ProjectsCard
            title="JOB_AUTO FILLER"
            des="JOB_AUTO FILLER is a cutting-edge web application designed to streamline the process of resume data extraction and auto-filling. It extracts relevant information from resumes and stores it securely in a database. The browser extension then auto-fills input fields on websites, making data entry faster and error-free."
            src={projectOne}
            githubLink="https://github.com/Arnav-NK/Job_Application_Auto-filler"
            liveLink="https://job-autofiller-demo.netlify.app"
          />
          {/* DevDuel */}
          <ProjectsCard
            title="DevDuel"
            des="DevDuel is a platform where two or more users compete live to solve coding problems. Features include a real-time coding environment, the same problem for multiple players, a timer to create pressure and excitement, and a leaderboard that updates live as players solve the problem."
            src={projectFour}
            githubLink="https://github.com/Soham271/DevDuel"
            liveLink="https://online-code-sync-demo.netlify.app"
          />
          {/* Zamato Project */}
          <ProjectsCard
            title="Zamato"
            des="Zamato is a feature-rich food delivery app that brings the convenience of restaurant meals directly to your doorstep, offering seamless ordering and real-time tracking."
            src={projectTwo}
            githubLink="https://github.com/Soham271/Zamto"
            liveLink="https://zamato-demo.netlify.app"
          />
          {/* Online Code Editor Project */}
          <ProjectsCard
            title="Online-Code-Editor"
            des="Code Sync is a real-time collaborative code editor that enables multiple users to write and edit code together seamlessly. It supports multiple languages, features room-based collaboration, and ensures real-time synchronization with Socket.io, making coding with peers effortless and efficient."
            src={projectThree}
            githubLink="https://github.com/Soham271/Online-code-Editor"
            liveLink="https://online-code-sync-demo.netlify.app"
          />
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
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
    </section>
  );
};

export default Projects;
