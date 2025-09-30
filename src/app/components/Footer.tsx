import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-gray-200 to-red-200 text-gray-900 shadow-inner border-t border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 py-6">
        
        {/* Left: Logo + Title */}
        <a
          href="/"
          className="flex items-center mb-4 md:mb-0 hover:text-red-600 transition-colors duration-300"
        >
          <GiMusicalNotes className="text-2xl text-red-600" />
          <span className="ml-2 text-lg font-bold tracking-wide">
            Urdu Rap and Reality
          </span>
        </a>

        {/* Center: Copyright */}
        <p className="text-sm text-gray-700 mb-4 md:mb-0">
          © {new Date().getFullYear()} —
          <a
            href="mailto:mubashirmpa2008@gmail.com"
            className="ml-1 hover:underline"
          >
            mubashirmpa2008@gmail.com
          </a>
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/mubashir-khan-538a662bb/"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MubashirKhanYousufZai"
            className="hover:text-black transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/talhahanjum"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
