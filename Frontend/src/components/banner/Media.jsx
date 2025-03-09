import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiHtml5 } from "react-icons/si";

const Media = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-10 justify-between items-center">
        {/* Social Media Links */}
        <div className="w-full xl:w-auto">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <a
              href="https://www.instagram.com/sohamnpatil2711"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/soham-p-418b77267"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Best Skills Section */}
        <div className="w-full xl:w-auto">
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
          </div>
        </div>
      </div>

      {/* Fixed Download CV Button */}
      <div className="w-full flex justify-center xl:justify-start mt-6 xl:mt-0">
        <a
          href="/testResume.pdf" // Make sure testResume.pdf is inside the "public" folder
          download
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                      text-white font-semibold rounded-lg shadow-lg 
                      transition-all duration-300 ease-in-out transform 
                      hover:scale-105 hover:from-purple-600 hover:to-blue-500 
                      flex items-center justify-center relative z-10"
        >
          Download CV
        </a>
      </div>
    </>
  );
};

export default Media;
