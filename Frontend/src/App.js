import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="relative w-full h-auto bg-bodyColor text-lightText px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-900 via-purple-900 to-black animate-gradient"></div>
        <div className="absolute inset-0 flex">
          <div className="bg-white w-1 h-1 rounded-full opacity-30 animate-float delay-200"></div>
          <div className="bg-white w-2 h-2 rounded-full opacity-30 animate-float delay-500"></div>
          <div className="bg-white w-3 h-3 rounded-full opacity-30 animate-float delay-700"></div>
        </div>
      </div>

      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
