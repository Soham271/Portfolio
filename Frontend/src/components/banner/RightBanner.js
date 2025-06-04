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
        className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] rounded-2xl object-cover z-10 shadow-lg shadow-amber-500/20"
        src={bannerImg}
        alt="Soham Patil"
      />
      <div className="absolute bottom-0 w-[320px] h-[280px] lg:w-[460px] lg:h-[460px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg"></div>
    </div>
  );
};

export default RightBanner;
