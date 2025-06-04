import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logoss from "../../assets/images/professional-website-developer-6343297-5242457.webp";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor border-b-[1px] border-gray-700 flex justify-between items-center px-4 lg:px-8 font-titleFont">
      <div>
        <img
          src={logoss}
          alt="Soham Patil"
          className="w-16 h-16 rounded-full object-cover shadowOne animate-fadeIn"
        />
      </div>
      <div className="flex items-center">
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id} className="navLink">
              <Link
                activeClass="border-b-2 border-designColor"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-designColor hover:bg-gray-700 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <FiMenu size={24} />
        </button>
        {showMenu && (
          <div className="w-full md:w-[80%] h-screen absolute top-0 left-0 bg-bodyColor p-6 overflow-y-auto">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={logoss}
                  alt="Soham Patil"
                  className="w-24 h-24 rounded-full object-cover shadowOne"
                />
                <p className="text-sm text-gray-300 mt-4 text-center max-w-xs">
                  Passionate MERN Stack Developer creating innovative web
                  solutions with a focus on user experience.
                </p>
              </div>
              <ul className="flex flex-col gap-4 items-center">
                {navLinksdata.map((item) => (
                  <li key={item._id} className="navLink">
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="border-b-2 border-designColor"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-base uppercase font-semibold text-white">
                  Find Me On
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon bg-[#3b5998] hover:bg-blue-700"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon bg-[#1DA1F2] hover:bg-blue-500"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/soham-p-418b77267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bannerIcon bg-[#0077b5] hover:bg-blue-600"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <button
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-designColor text-2xl"
                aria-label="Close menu"
              >
                <MdClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
