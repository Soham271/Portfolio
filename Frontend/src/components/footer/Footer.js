import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logoss from "../../assets/images/professional-website-developer-6343297-5242457.webp";

const Footer = () => {
  const quickLinks = ["About", "Portfolio", "Services", "Blog", "Contact"];
  const resources = [
    "Authentication",
    "System Status",
    "Terms of Service",
    "Pricing",
    "Over Right",
  ];
  const developers = [
    "Documentation",
    "Authentication",
    "API Reference",
    "Support",
    "Open Source",
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

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
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-8">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={logoss}
            alt="Soham Patil"
            className="w-24 h-24 rounded-full object-cover border border-gray-700/50 shadow-lg shadow-purple-500/20 hover:border-purple-500/50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex gap-4">
            <motion.a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition duration-300"
              aria-label="Facebook"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition duration-300"
              aria-label="X"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/soham-p-418b77267"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition duration-300"
              aria-label="LinkedIn"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl uppercase font-semibold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x mb-6">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-4">
            {quickLinks.map((link, index) => (
              <motion.li
                key={link}
                className="relative text-gray-400 text-base font-medium hover:text-white group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl uppercase font-semibold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x mb-6">
            Resources
          </h3>
          <ul className="flex flex-col gap-4">
            {resources.map((link, index) => (
              <motion.li
                key={link}
                className="relative text-gray-400 text-base font-medium hover:text-white group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl uppercase font-semibold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x mb-6">
            Developers
          </h3>
          <ul className="flex flex-col gap-4">
            {developers.map((link, index) => (
              <motion.li
                key={link}
                className="relative text-gray-400 text-base font-medium hover:text-white group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>
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

export default Footer;
