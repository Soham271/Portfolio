import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-full">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education
          </h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-designColor flex flex-col gap-10">
          <ResumeCard
            title="Integrated B.Tech and M.Tech in Information Technology"
            subTitle="IIIT Gwalior (2023 - 2028)"
            result="7.78/10"
            des="Comprehensive training to excel in various sectors of technology and innovation."
          />
          <ResumeCard
            title="Higher Secondary School Certificate"
            subTitle="Dada Saheb Namdas Devidas Bhole College (2021-2023)"
            result="84.83%"
            des="Tertiary education preparing for advanced academic and professional pursuits."
          />
          <ResumeCard
            title="Central Board of Secondary Education"
            subTitle="Tapti Public School (2009 - 2020)"
            result="90.2%"
            des="Foundational education covering key academic disciplines."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
