import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiDocker,
  SiJavascript,
} from "react-icons/si";
import resume from "../../assets/resume.pdf";

const Media = () => {
  return (
    <div className="flex flex-col gap-6 mt-8">
      {/* Social Media Links */}
      <div className="flex flex-col items-center">
        <h2 className="text-base uppercase font-medium text-gray-400 mb-3">
          Find Me On
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] hover:bg-[#2d4373] transition duration-300"
          >
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a
            href="https://www.instagram.com/sohamnpatil2711"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 transition duration-300"
          >
            <FaInstagram className="text-white text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/soham-p-418b77267"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] hover:bg-[#005582] transition duration-300"
          >
            <FaLinkedinIn className="text-white text-lg" />
          </a>
          <a
            href="https://github.com/Soham271"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-black transition duration-300"
          >
            <FaGithub className="text-white text-lg" />
          </a>
        </div>
      </div>

      {/* Best Skills */}
      <div className="flex flex-col items-center">
        <h2 className="text-base uppercase font-medium text-gray-400 mb-3">
          Best Skills
        </h2>
        <div className="flex gap-3 flex-wrap justify-center">
          {[
            FaReact,
            SiJavascript,
            SiNodedotjs,
            SiTailwindcss,
            SiMongodb,
            SiHtml5,
            SiCss3,
            SiExpress,
            SiMysql,
            SiDocker,
          ].map((Icon, idx) => (
            <span
              key={idx}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white shadow-md hover:bg-amber-500 hover:text-black transition duration-300"
            >
              <Icon className="text-lg" />
            </span>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div className="flex justify-center">
        <a
          href={resume}
          download
          className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg shadow hover:shadow-xl hover:bg-amber-600 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Media;
