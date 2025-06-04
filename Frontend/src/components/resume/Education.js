import ResumeCard from "./ResumeCard.js";
const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
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

      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-10 lg:gap-20 px-6 py-12 max-w-7xl mx-auto">
        <div className="w-full">
          <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4 mb-8">
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x">
                Education
              </h2>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <div className="absolute -bottom-4 left-2 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"></div>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mt-4">
              My academic journey through various institutions, building a
              strong foundation in technology and innovation.
            </p>
          </div>

          <div className="relative mt-6 lg:mt-14 w-full">
            <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-full shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
            </div>

            <div className="ml-16 space-y-12">
              <div className="absolute left-4 top-8 w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/30 animate-pulse">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>

              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <ResumeCard
                  title="Integrated B.Tech and M.Tech in Information Technology"
                  subTitle="IIIT Gwalior (2023 - 2028)"
                  result="7.78/10"
                  des="Comprehensive training to excel in various sectors of technology and innovation, focusing on cutting-edge IT solutions and research methodologies."
                />
              </div>

              <div className="absolute left-4 top-80 w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-lg shadow-blue-500/30 animate-pulse delay-300">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>

              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <ResumeCard
                  title="Higher Secondary School Certificate"
                  subTitle="Dada Saheb Namdas Devidas Bhole College (2021-2023)"
                  result="84.83%"
                  des="Tertiary education preparing for advanced academic and professional pursuits, with strong emphasis on mathematics and science foundations."
                />
              </div>

              <div className="absolute left-4 bottom-24 w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full shadow-lg shadow-indigo-500/30 animate-pulse delay-700">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>

              <div className="transform hover:scale-[1.02] transition-transform duration-300">
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

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
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

export default Education;
