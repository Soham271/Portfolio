import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logoss from "../../assets/images/professional-website-developer-6343297-5242457.webp";

const Footer = () => {
  const quickLinks = ["About", "Portfolio", "Services", "Blog", "Contact"];
  const resources = ["Authentication", "System Status", "Terms of Service", "Pricing", "Over Right"];
  const developers = ["Documentation", "Authentication", "API Reference", "Support", "Open Source"];

  return (
    <div className="w-full py-20 border-b-[1px] border-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        <img src={logoss} alt="Soham Patil" className="w-24 h-24 rounded-full object-cover shadowOne" />
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
      <div>
        <h3 className="text-xl uppercase text-designColor font-semibold mb-6">Quick Links</h3>
        <ul className="flex flex-col gap-4">
          {quickLinks.map((link) => (
            <li key={link} className="footerLink group">
              {link}
              <span className="w-full h-[1px] bg-designColor absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl uppercase text-designColor font-semibold mb-6">Resources</h3>
        <ul className="flex flex-col gap-4">
          {resources.map((link) => (
            <li key={link} className="footerLink group">
              {link}
              <span className="w-full h-[1px] bg-designColor absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl uppercase text-designColor font-semibold mb-6">Developers</h3>
        <ul className="flex flex-col gap-4">
          {developers.map((link) => (
            <li key={link} className="footerLink group">
              {link}
              <span className="w-full h-[1px] bg-designColor absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
