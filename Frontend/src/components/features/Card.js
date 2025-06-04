import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full h-80 p-6 rounded-xl bg-gray-800/50 backdrop-blur-md border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300 flex items-center">
      <motion.div
        className="flex flex-col gap-6 h-full"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          {icon ? (
            <span className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center text-3xl text-white">
              {icon}
            </span>
          ) : (
            <div className="w-12 h-12 flex flex-col justify-between">
              <span className="w-full h-[2px] rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 inline-flex"></span>
              <span className="w-full h-[2px] rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 inline-flex"></span>
              <span className="w-full h-[2px] rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 inline-flex"></span>
              <span className="w-full h-[2px] rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 inline-flex"></span>
            </div>
          )}
          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-white">
            {title}
          </h2>
        </div>
        <p className="text-gray-400 leading-relaxed">{des}</p>
        <span className="text-2xl text-purple-500 group-hover:text-blue-500 transition-colors duration-300">
          <HiArrowRight />
        </span>
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        .group:hover .text-purple-500 {
          color: #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default Card;
