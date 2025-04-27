import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { FaFigma, FaReact, FaMobileAlt } from "react-icons/fa";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]  text-white p-4 pt-40 sm:p-6 md:p-8 lg:pt-40 lg:pb-20 w-full gap-10  lg:gap-40">
      {/* 3D abstract shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>

      {/* Left side - Photo and skills */}
      <div className="relative flex justify-center w-full lg:w-auto ">
        {/* Glow and border circle */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-transform hover:scale-105 duration-500 bg-red-500">
          {/* Top part of image popping out */}
          <div className="absolute -top-36 left-0 w-full  z-20 flex justify-center pointer-events-none b-black">
            <img
              src="assets/about.png"
              alt="Moses Dev"
              className="w-ful h-[500px] object-cover"
              style={{
                clipPath: "inset(0 0 35% 0)", // top right bottom left (cut off bottom 35%)
              }}
            />
          </div>

          {/* Clipped circle for lower part of image */}
          <div className="absolute inset-0 overflow-hidden rounded-full z-10">
            <img
              src="assets/about.png"
              alt="Moses Dev"
              className="w-full h-[500px] object-cover -top-36 absolute left-0"
            />
          </div>

          {/* Floating icons */}
          <FaFigma className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-pink-300 text-2xl drop-shadow-md animate-bounce z-30" />
          <FaReact className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-blue-400 text-2xl drop-shadow-md animate-spin-slow z-30" />
          <FaMobileAlt className="absolute bottom-0 -right-4 text-green-400 text-xl drop-shadow-md animate-bounce-slow z-30" />

          {/* Skills pills */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex flex-wrap justify-center gap-1 sm:gap-2 px-2 sm:px-4 z-30">
            {[
              "UX/UI Design",
              "Mobile App",
              "Website",
              "Prototype",
              "Dashboard",
              "Wireframe",
            ].map((text, i) => (
              <span
                key={i}
                className="bg-white/10 border border-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium  bg-purple-950  shadow-purple-600 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)]"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="max-w-full lg:max-w-lg text-center lg:text-left z-10">
        <div className="flex items-center mb-2 justify-center lg:justify-start">
          <div className="w-5 h-0.5 bg-pink-400 mr-2"></div>
          <span className="text-pink-300 font-medium">About Me</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Who is <span className="text-pink-300">Moses Dev</span>?
        </h2>

        <p className="text-white/80 mb-6 md:mb-10 px-4 lg:px-0">
          I’m a creative frontend and UI/UX developer passionate about building
          smooth, engaging digital experiences.
        </p>

        <div className="flex justify-between mb-6 md:mb-10 max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
          {[
            { value: "13+", label: "Project Completed" },
            { value: "8+", label: "Industry Covered" },
            { value: "4+", label: "Years of Experience" },
          ].map(({ value, label }, i) => (
            <div key={i} className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-300">
                {value}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-4">
          <button
            className=" text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2  transition-all duration-300  bg-purple-950  shadow-purple-600 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)] 
             hover:bg-purple-950  hover:shadow-purple-400 hover:shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)]
            "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Download CV
            <span
              className={`rounded-full p-1 transition-all duration-300 ${
                isHovered ? " bg-pink-500 font-bold" : "bg-pink-500 font-bold text-black"
              }`}
            >
              <ArrowRight size={16} />
            </span>
          </button>

          <div className="text-xl sm:text-2xl font-script italic text-pink-300">
            Moses Dev
          </div>
        </div>
      </div>
    </div>
  );
}
