import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-12 pb-20 flex flex-col gap-12 lg:gap-0 lg:flex-row items-center border-b border-gray-700 font-sans"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
