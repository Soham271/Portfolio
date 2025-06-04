import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import contactus from "../../assets/images/contactus.jpg";

const socialLinks = [
  {
    icon: <FaFacebookF />,
    name: "Facebook",
    href: "https://facebook.com",
    color: "hover:bg-blue-500/20 hover:border-blue-500/50",
  },
  {
    icon: <FaTwitter />,
    name: "X",
    href: "https://x.com", // Updated to X for accuracy as of June 4, 2025
    color: "hover:bg-blue-500/20 hover:border-blue-500/50",
  },
  {
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    href: "https://linkedin.com/in/soham-p-418b77267",
    color: "hover:bg-blue-500/20 hover:border-blue-500/50",
  },
];

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-gray-950 via-gray-900 to-black p-4 lgl:p-8 rounded-xl border border-gray-700/50 shadow-lg shadow-purple-500/20 hover:border-purple-500/50 transition-colors duration-300 flex flex-col gap-8 justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-8">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={contactus}
          alt="contactus"
          className="w-full h-64 object-cover rounded-xl border border-gray-700/50 shadow-lg shadow-purple-500/20 hover:border-purple-500/50 transition duration-300"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x">
            Soham N Patil
          </h3>
          <p className="text-lg font-normal text-gray-400">
            MERN Stack Developer
          </p>
          <p className="text-base text-gray-400 tracking-wide leading-relaxed">
            Hey! Soham N Patil here. I am passionate about website design. If
            you are looking to create a high-quality, custom website, feel free
            to reach out!
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-white">+91 7028421109</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-white">soham2711patil@gmail.com</span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-medium text-gray-400 mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-white ${link.color} transition duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {link.icon}
                <span className="tooltip absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded py-1 px-2 shadow transition-opacity duration-300 whitespace-nowrap">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
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
    </div>
  );
};

export default ContactLeft;
