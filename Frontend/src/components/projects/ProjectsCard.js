import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsCard = ({ title, des, srcs = [], githubLink, liveLink }) => {
  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Link is not available .");
    }
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      {/* Image Slider */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {srcs.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                src={src}
                alt={title + " img " + (i + 1)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                onClick={() => openLink(githubLink)}
              >
                <BsGithub />
              </span>
              <span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                onClick={() => openLink(liveLink)}
              >
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
