import React from "react";
import { motion } from "framer-motion";
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
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/20 transition duration-300"
          >
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a
            href="https://www.instagram.com/sohamnpatil2711"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-pink-500/50 hover:bg-pink-500/20 transition duration-300"
          >
            <FaInstagram className="text-white text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/soham-p-418b77267"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/20 transition duration-300"
          >
            <FaLinkedinIn className="text-white text-lg" />
          </a>
          <a
            href="https://github.com/Soham271"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-gray-500/50 hover:bg-gray-500/20 transition duration-300"
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
        <div className="flex gap-4 flex-wrap justify-center">
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
            <motion.span
              key={idx}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="text-2xl" />
            </motion.span>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div className="flex justify-center">
        <a
          href={resume}
          download
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-xl hover:from-purple-600 hover:to-blue-600 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Media;
