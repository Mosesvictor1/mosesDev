import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-950 via-indigo-950 to-black text-white py-16 px-6 sm:px-10 overflow-hidden">
      {/* Floating Lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Victor Moses
          </h3>
          <p className="text-purple-300">Full Stack Developer & Designer</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-purple-300">Quick Links</h4>
          <ul className="space-y-2">
            {["home", "about", "projects", "contact"].map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link}`}
                  className="hover:text-purple-400 transition duration-300 ease-in-out"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect with Icons */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-purple-300">Connect</h4>
          <div className="flex gap-5 mt-2">
            <a href="#" className="hover:text-purple-400 transition text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-purple-400 transition text-2xl">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-purple-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-purple-400 transition text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-purple-400 transition text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-purple-700/40 mt-12 pt-8 text-center text-purple-400 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Victor Moses. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
