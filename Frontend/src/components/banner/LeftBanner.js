import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["IIITIAN", "DSA Enthusiast", "Full Stack Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-10 px-4 lg:px-0">
      <div className="flex flex-col gap-6">
        <h4 className="text-lg font-semibold text-designColor tracking-wider animate-fadeIn">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Soham N Patil</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center">
          a <span className="ml-2">{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-medium text-gray-300 leading-7 tracking-wide max-w-md">
          I craft seamless digital experiences using animation to enhance
          interactions, focusing on intuitive and impactful design solutions.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
