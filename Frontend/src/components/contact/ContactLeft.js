import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import contactus from "../../assets/images/contactus.jpg";

const socialLinks = [
  {
    icon: <FaFacebookF />,
    name: "Facebook",
    href: "https://facebook.com", // replace with your link
    color: "hover:text-blue-600",
  },
  {
    icon: <FaTwitter />,
    name: "Twitter",
    href: "https://twitter.com", // replace with your link
    color: "hover:text-blue-400",
  },
  {
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
    href: "https://linkedin.com", // replace with your link
    color: "hover:text-blue-700",
  },
];

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        src={contactus}
        alt="contactus"
        className="w-full h-64 object-cover rounded-lg mb-2"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Soham N Patil</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Hey! Soham N Patil here. I am passionate about website design. If you
          are looking to create a high-quality, custom website, feel free to
          reach out!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7028421109</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">soham2711patil@gmail.com</span>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span
                className={`text-xl text-gray-400 ${link.color} cursor-pointer transition-colors duration-300`}
              >
                {link.icon}
              </span>
              <span className="tooltip absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 shadow transition-opacity duration-300 whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
