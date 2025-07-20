import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ProjectsCard from "./ProjectsCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";

const projectsData = [
  {
    title: "JOB_AUTO FILLER",
    des: "JOB_AUTO FILLER is a cutting-edge web application to streamline resume data extraction and auto-filling.",
    src: projectOne,
    githubLink: "https://github.com/Arnav-NK/Job_Application_Auto-filler",
    liveLink: "https://job-autofiller-demo.netlify.app",
  },
  {
    title: "DevDuel",
    des: "DevDuel is a platform for live coding battles with real-time code sync, timer, and leaderboard.",
    src: projectFour,
    githubLink: "https://github.com/Soham271/DevDuel",
    liveLink: "https://online-code-sync-demo.netlify.app",
  },
  {
    title: "Zamato",
    des: "Zamato is a food delivery app offering seamless ordering and real-time tracking.",
    src: projectTwo,
    githubLink: "https://github.com/Soham271/Zamto",
    liveLink: "https://zamato-demo.netlify.app",
  },
  {
    title: "Online-Code-Editor",
    des: "Code Sync is a real-time collaborative code editor for multiple users and languages.",
    src: projectThree,
    githubLink: "https://github.com/Soham271/Online-code-Editor",
    liveLink: "https://online-code-sync-demo.netlify.app",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden"
  >
    <div className="relative z-10">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-5xl mb-16 md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          My Projects
        </h2>
      </div>
      {/* Autoplaying, infinite linear slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        loop={true}
        speed={4000} // Higher for slower, lower for faster scroll (ms for slide change)
        autoplay={{
          delay: 0, // Zero for continuous motion
          disableOnInteraction: false,
          pauseOnMouseEnter: false, // Optional: keeps moving on hover
        }}
        freeMode={true}
        freeModeMomentum={false}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
        className="project-swiper"
      >
        {projectsData.map((proj, idx) => (
          <SwiperSlide key={idx}>
            <ProjectsCard
              title={proj.title}
              des={proj.des}
              srcs={[proj.src]}
              githubLink={proj.githubLink}
              liveLink={proj.liveLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Projects;
