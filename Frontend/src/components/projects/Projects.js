import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
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
    </section>
  );
};

export default Projects;
