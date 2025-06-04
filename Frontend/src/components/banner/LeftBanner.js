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
        <h4 className="text-sm uppercase font-semibold tracking-widest text-purple-400">
          Welcome to my world
        </h4>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x">
            Soham N Patil
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 flex items-center">
          a{" "}
          <span className="ml-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#8b5cf6"
          />
        </h2>
        <p className="text-base font-medium text-gray-400 max-w-md leading-relaxed tracking-wide">
          Hey, Myself Soham N Patil, a MERN Stack Developer pursuing an
          integrated BTech and MTech in IT at IIIT Gwalior. Skilled in React,
          Node.js, MongoDB, and Express, I’m a DSA enthusiast focused on solving
          real-life problems through efficient algorithms and innovative web
          solutions. Let’s build impactful digital experiences together!
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
