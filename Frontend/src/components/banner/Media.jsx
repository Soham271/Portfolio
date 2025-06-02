import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiHtml5 } from "react-icons/si";
import resume from "../../assets/resume.pdf";

const Media = () => {
  return (
    <div className="flex flex-col gap-8 mt-10">
      {/* Social Media Links */}
      <div className="flex flex-col items-center">
        <h2 className="text-base uppercase font-semibold text-white mb-4">
          Find Me On
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon bg-[#3b5998] hover:bg-blue-700"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/sohamnpatil2711"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon bg-gradient-to-r from-pink-500 to-orange-500"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/soham-p-418b77267"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon bg-[#0077b5] hover:bg-blue-600"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          <a
            href="https://github.com/Soham271"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon bg-[#50b946] hover:bg-black"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>

      {/* Best Skills Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-base uppercase font-semibold text-white mb-4">
          Best Skills
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <span className="bannerIcon bg-[#98342f]">
            <FaReact className="text-xl" />
          </span>
          <span className="bannerIcon bg-[#3c873a]">
            <SiNodedotjs className="text-xl" />
          </span>
          <span className="bannerIcon bg-[#38bdf8]">
            <SiTailwindcss className="text-xl" />
          </span>
          <span className="bannerIcon bg-[#4db33d]">
            <SiMongodb className="text-xl" />
          </span>
          <span className="bannerIcon bg-[#f16529]">
            <SiHtml5 className="text-xl" />
          </span>
        </div>
      </div>

      {/* Download CV Button */}
      <div className="flex justify-center">
        <a
          href={resume}
          download
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Media;
