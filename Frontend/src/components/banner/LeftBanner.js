import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["IIITIAN", "DSA Enthusiast", "Full Stack Developer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-8 px-4 lg:px-0">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm uppercase text-amber-500 font-semibold tracking-widest">
          Welcome to my world
        </h4>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-red-700">Soham N Patil</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 flex items-center">
          a <span className="ml-2 text-red-700">{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#f59e0b"
          />
        </h2>
        <p className="text-base font-medium text-gray-400 max-w-md leading-relaxed tracking-wide">
          I craft seamless digital experiences using animation to enhance
          interactions, focusing on intuitive and impactful design solutions.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
