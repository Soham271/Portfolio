import React, { useEffect, useState } from "react";
import ResumeCard from "./ResumeCard.js";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Trigger main container animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Stagger card animations
    const cardTimers = [500, 1000, 1500].map((delay, index) =>
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, delay)
    );

    return () => {
      clearTimeout(timer);
      cardTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse transform transition-transform duration-1000 hover:scale-110"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000 transform transition-transform duration-1000 hover:scale-110"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-2xl animate-pulse delay-500 transition-transform duration-1000 hover:scale-110"></div>
      </div>

      {/* Floating particles with enhanced animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float opacity-0 animate-fade-in"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`relative z-10 w-full flex flex-col lg:flex-row gap-10 lg:gap-20 px-6 py-12 max-w-7xl mx-auto transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="w-full">
          {/* Header section with enhanced animations */}
          <div
            className={`py-6 lg:py-12 font-titleFont flex flex-col gap-4 mb-8 transition-all duration-800 delay-200 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x transform transition-transform duration-300 group-hover:scale-105">
                Education
              </h2>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 group-hover:w-32 group-hover:h-1.5"></div>
              <div className="absolute -bottom-4 left-2 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 transition-all duration-500 group-hover:w-20 group-hover:opacity-80"></div>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mt-4 transition-colors duration-300 hover:text-gray-300">
              My academic journey through various institutions, building a
              strong foundation in technology and innovation.
            </p>
          </div>

          {/* Timeline section with enhanced animations */}
          <div
            className={`relative mt-6 lg:mt-14 w-full transition-all duration-1000 delay-400 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Animated timeline line */}
            <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-full shadow-lg shadow-purple-500/20 transform origin-top transition-all duration-1500 delay-600 scale-y-0 animate-grow-line">
              <div className="w-full h-full bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
            </div>

            <div className="ml-16 space-y-12">
              {/* Timeline point 1 */}
              <div
                className={`absolute left-4 top-8 w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/30 animate-pulse transform transition-all duration-500 delay-800 ${
                  visibleCards.includes(0)
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              >
                <div className="absolute inset-1 bg-white rounded-full transition-all duration-300 hover:inset-0.5"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-ping opacity-20"></div>
              </div>

              {/* Education Card 1 */}
              <div
                className={`transform transition-all duration-700 delay-900 ${
                  visibleCards.includes(0)
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-10 opacity-0 scale-95"
                } hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20`}
              >
                <ResumeCard
                  title="Integrated B.Tech and M.Tech in Information Technology"
                  subTitle="IIIT Gwalior (2023 - 2028)"
                  result="7.78/10"
                  des="Comprehensive training to excel in various sectors of technology and innovation, focusing on cutting-edge IT solutions and research methodologies."
                />
              </div>

              {/* Timeline point 2 */}
              <div
                className={`absolute left-4 top-80 w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-lg shadow-blue-500/30 animate-pulse delay-300 transform transition-all duration-500 delay-1100 ${
                  visibleCards.includes(1)
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              >
                <div className="absolute inset-1 bg-white rounded-full transition-all duration-300 hover:inset-0.5"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 animate-ping opacity-20"></div>
              </div>

              {/* Education Card 2 */}
              <div
                className={`transform transition-all duration-700 delay-1200 ${
                  visibleCards.includes(1)
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-10 opacity-0 scale-95"
                } hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20`}
              >
                <ResumeCard
                  title="Higher Secondary School Certificate"
                  subTitle="Dada Saheb Namdas Devidas Bhole College (2021-2023)"
                  result="84.83%"
                  des="Tertiary education preparing for advanced academic and professional pursuits, with strong emphasis on mathematics and science foundations."
                />
              </div>

              {/* Timeline point 3 */}
              <div
                className={`absolute left-4 bottom-24 w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full shadow-lg shadow-indigo-500/30 animate-pulse delay-700 transform transition-all duration-500 delay-1400 ${
                  visibleCards.includes(2)
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              >
                <div className="absolute inset-1 bg-white rounded-full transition-all duration-300 hover:inset-0.5"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 animate-ping opacity-20"></div>
              </div>

              {/* Education Card 3 */}
              <div
                className={`transform transition-all duration-700 delay-1500 ${
                  visibleCards.includes(2)
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-10 opacity-0 scale-95"
                } hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20`}
              >
                <ResumeCard
                  title="Central Board of Secondary Education"
                  subTitle="Tapti Public School (2009 - 2020)"
                  result="90.2%"
                  des="Foundational education covering key academic disciplines, establishing strong analytical and problem-solving capabilities."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
            opacity: 0.4;
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
            opacity: 0.3;
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

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
        }

        @keyframes grow-line {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 2s ease-out forwards;
        }

        .animate-grow-line {
          animation: grow-line 1.5s ease-out 0.6s forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar with enhanced styling */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #2563eb);
        }

        /* Enhanced hover effects */
        .group:hover .absolute {
          transition: all 0.3s ease;
        }

        /* Responsive transitions */
        @media (max-width: 768px) {
          .transform {
            transition-duration: 0.5s;
          }
        }

        /* Accessibility - Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Education;
