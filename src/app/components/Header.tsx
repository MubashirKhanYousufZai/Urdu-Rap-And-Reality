import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-100 via-gray-200 to-red-200 text-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo / Title */}
        <a
          href="/"
          className="flex items-center mb-4 md:mb-0"
        >
          <GiMusicalNotes className="text-3xl text-red-600" />
          <span className="ml-3 text-xl font-bold tracking-wide hover:text-red-500 transition-colors duration-300">
            Urdu Rap and Reality
          </span>
        </a>

        {/* Nav */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center gap-6 text-base font-medium">
          <a href="/" className="flex items-center gap-1 hover:text-red-600 transition-colors">
            Home <FaAngleDown />
          </a>
          <a href="/components/blog/rappers" className="flex items-center gap-1 hover:text-red-600 transition-colors">
            Rappers <FaAngleDown />
          </a>
          <a href="/components/blog/bands" className="flex items-center gap-1 hover:text-red-600 transition-colors">
            Bands <FaAngleDown />
          </a>
          <a href="/components/blog/producers" className="flex items-center gap-1 hover:text-red-600 transition-colors">
            Producers <FaAngleDown />
          </a>
          <a href="/components/albums" className="flex items-center gap-1 hover:text-red-600 transition-colors">
            Albums <FaAngleDown />
          </a>
        </nav>

        {/* Contact Button */}
        <a
          href="/components/contact"
          className="inline-flex items-center gap-1 bg-red-600 text-white py-2 px-5 rounded-full text-base font-medium hover:bg-red-700 transition-all duration-300 shadow-md"
        >
          Contact <FaAngleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
