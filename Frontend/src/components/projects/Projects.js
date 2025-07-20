import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
        <h2 className="text-6xl mb-18 md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          My Projects
        </h2>
      </div>
      {/* Continuous slider */}
      <Swiper
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3500}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        allowTouchMove={false}
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
    ;
  </section>
);

export default Projects;
