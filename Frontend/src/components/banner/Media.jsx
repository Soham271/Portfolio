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
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-10 justify-between items-center flex-wrap mt-10">
        {/* Social Media Links */}
        <div className="w-full xl:w-auto flex flex-col items-center justify-center">
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">
            Find me in
          </h2>
          <div className="flex gap-5 items-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon flex items-center justify-center w-12 h-12 rounded-full bg-[#3b5998] hover:bg-blue-700 text-white transition-all duration-300 hover:rotate-180 transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sohamnpatil2711"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-105 text-white transition-all duration-300 hover:rotate-180 transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/soham-p-418b77267"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon flex items-center justify-center w-12 h-12 rounded-full bg-[#0077b5] hover:bg-blue-600 text-white transition-all duration-300 hover:rotate-180 transform"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Best Skills Section */}
        <div className="w-full xl:w-auto flex flex-col items-center justify-center mt-6 xl:mt-0">
          <h2 className="text-base uppercase font-titleFont mb-4 text-white">
            BEST SKILL ON
          </h2>
          <div className="flex gap-5 items-center justify-center">
            <span className="bannerIcon flex items-center justify-center w-12 h-12 rounded-full bg-[#61DBFB] hover:rotate-180 hover:scale-105 transition-transform duration-300 transform">
              <FaReact />
            </span>
            <span className="bannerIcon flex items-center justify-center w-12 h-12 rounded-full bg-[#3c873a] hover:rotate-180 hover:scale-105 transition-transform duration-300 transform">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon flex items-center justify-center w-12 h-12 rounded-full bg-[#38bdf8] hover:rotate-180 hover:scale-105 transition-transform duration-300 transform">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon flex items-center justify-center w-12 h-12 rounded-full bg-[#4db33d] hover:rotate-180 hover:scale-105 transition-transform duration-300 transform">
              <SiMongodb />
            </span>
            <span className="bannerIcon flex items-center justify-center w-12 h-12 rounded-full bg-[#f16529] hover:rotate-180 hover:scale-105 transition-transform duration-300 transform">
              <SiHtml5 />
            </span>
          </div>
        </div>
      </div>

      {/* Fixed Download CV Button */}
      <div className="w-full flex justify-center xl:justify-start mt-10 xl:mt-0">
        <a
          href="/testResume.pdf" // Ensure testResume.pdf is inside the "public" folder
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
