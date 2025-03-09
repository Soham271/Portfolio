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
        <ProjectsCard
          title="JOB_AUTO FILLER"
          des="JOB_AUTO FILLER is a cutting-edge web application designed to streamline the process of resume data extraction and auto-filling. By leveraging advanced resume parsing technology, the project extracts relevant information from resumes and stores it securely in a database. With seamless integration through a browser extension, AutoResume allows for the automatic population of input fields on any web page, making data entry faster, more efficient, and error-free."
          src={projectOne}
          githubLink="https://github.com/Arnav-NK/Job_Application_Auto-filler" // Pass GitHub link
          websiteLink="https://your-website-link.com" // Pass website link (if any)
        />
        <ProjectsCard
          title="Zamato"
          des="Zamato is a feature-rich food delivery app that brings the convenience of restaurant meals directly to your doorstep, offering seamless ordering and real-time tracking."
          src={projectThree}
          githubLink="https://github.com/Soham271/Zamto" // Pass GitHub link
          websiteLink="https://your-website-link.com" // Pass website link (if any)
        />
      </div>
    </section>
  );
};

export default Projects;
