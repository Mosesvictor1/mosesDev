import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px"; // Prevent layout shift
    } else {
      // Enable scroll
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? " text-white backdrop-blur-sm shadow-m py-4  bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)]"
          : "bg-transparent py-4 text-white"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled ? "bg-orange-500" : "bg-yellow-500"
              } text-white font-bold`}
            >
              MD
            </div>
            <span className="text-xl font-semibold">MosesDev.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 ">
            <li>
              <a
                href="#home"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-orange-500 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-orange-500 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-orange-500 transition-colors"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#testimonials"
                className="hover:text-orange-500 transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? " hover:bg-orange-600 text-white border-l-indigo-50 border-2 font-bold  bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_20px_rgba(138, 92, 246, 0.903)]"
                    : " hover:bg-gray-800 text-white  bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)]"
                }`}
              >
                Contact Me
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-2xl"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 h-screen backdrop-blur-md transition-transform duration-300 transform md:hidden bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              <li>
                <a
                  href="#home"
                  className="text-2xl hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-2xl hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-2xl hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-2xl hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-2xl hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="text-2xl hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors text-xl"
                  onClick={toggleMenu}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
