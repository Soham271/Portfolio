import React from "react";
import { motion } from "framer-motion";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] rounded-2xl object-cover z-10 shadowOne"
        src={bannerImg}
        alt="Soham Patil"
      />
      <div className="absolute bottom-0 w-[320px] h-[280px] lg:w-[460px] lg:h-[460px] bg-gradient-to-r from-[#1e2024] to-[#202327] rounded-2xl shadowOne"></div>
    </div>
  );
};

export default RightBanner;
