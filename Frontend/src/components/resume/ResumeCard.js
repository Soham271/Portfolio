import React from "react";

// Mock ResumeCard component since it's not provided
const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="group relative w-full bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>
          <span className="text-purple-400 font-semibold text-lg bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            {result}
          </span>
        </div>

        <h4 className="text-purple-300 text-lg font-medium mb-4 group-hover:text-purple-200 transition-colors duration-300">
          {subTitle}
        </h4>

        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {des}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-300"></div>
    </div>
  );
};
export default ResumeCard;
