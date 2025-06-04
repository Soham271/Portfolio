import React from "react";
import { motion } from "framer-motion";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] rounded-2xl object-cover z-10 border border-gray-700/50 shadow-lg shadow-purple-500/20 hover:border-purple-500/50 transition duration-300"
        src={bannerImg}
        alt="Soham Patil"
      />
      <div className="absolute bottom-0 w-[320px] h-[280px] lg:w-[460px] lg:h-[460px] bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl shadow-lg backdrop-blur-md"></div>
    </div>
  );
};

export default RightBanner;
