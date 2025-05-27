import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full flex group">
      <div className="w-10 h-[6px] bg-designColor mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-gray-800">
          <span className="w-3 h-3 rounded-full bg-designColor inline-flex group-hover:bg-white transition-colors duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-lg p-6 flex flex-col justify-center gap-4 shadowOne hover:bg-gray-700 transition-all duration-300">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-designColor transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-300 group-hover:text-white">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 bg-designColor text-white rounded-lg text-sm font-medium shadowOne">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-300 group-hover:text-gray-100">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
