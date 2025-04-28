import React from "react";
import { FaAirbnb, FaDropbox } from "react-icons/fa";
import { SiUpwork, SiShopify } from "react-icons/si";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-purple-950 to-indigo-950 text-white pt-24 px-0 md:px-0 lg:px-0"
      id="home"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#f4cde0] rounded-full mix-blend-multiply filter blur-2xl opacity-100 animate-blob"></div>
        <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#E5F1FF] rounded-full mix-blend-multiply filter blur-2xl opacity-100 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-5 sm:left-10 md:left-20 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#efffe1d3] rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl md:blur-9xl opacity-160 animate-blob animation-delay-4000"></div>
      </div>
      {/* Background effect with light effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(138, 92, 246, 0.1) 1px, transparent 3px), linear-gradient(90deg, rgba(138, 92, 246, 0.1) 1px, transparent 3px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="containe w-full relative right-0 left-0 z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center px-4 sm:px-6 md:px-16 lg:px-24">
          {/* Left Content */}
          <div className="space-y-8 mb-8 md:mb-0  pl-2 sm:pl-4 md:pl-12 lg:pl-16 w-full flex flex-col md:items-start items-center">
            <div className="space-y-2 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900">
                <span className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl block mb-2">
                  Hy! I Am
                </span>
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                  MosDev
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-lg">
                Frontend Developer and digital creative director working in
                Development field for 4 years so far, specialize user interface
                development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-medium transition-colors">
                Hire Me
              </button>
              <button
                className="bg-orange-600 hover:bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-medium transition-colors"
                onClick={() =>
                  window.open(
                    "https://wa.me/2349138691147?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20to%20discuss%20your%20services%2C%20can%20you%20please%20provide%20more%20details%3F%0A%0Ahttps%3A%2F%2Fmoses-dev.vercel.app",
                    "_blank"
                  )
                }
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Right Content - Image and Floating Elements */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="assets/hero-image.png"
                alt="Professional headshot"
                className="w-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-[-40px] md:top-4 -left-2 xs:left-0 sm:left-4  p-2 xs:p-3 rounded-lg  flex items-center gap-2 z-20 scale-[0.75] xs:scale-[0.85] sm:scale-100 bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
              <div className="w-6 sm:w-8 h-6 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <img
                  src="assets/ui-ux-icon.png"
                  alt="UI/UX"
                  className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
                  UI/UX
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white whitespace-nowrap">
                  Product Designer
                </p>
              </div>
            </div>

            {/* Award Badge */}
            <div className="absolute top-[-40px] md:top-8 -right-2 xs:right-0 sm:right-4 p-2 xs:p-3 rounded-lg  flex items-center gap-2 z-20 scale-[0.75] xs:scale-[0.85] sm:scale-100  bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
              <div className="w-6 sm:w-8 h-6 sm:h-8">
                <img
                  src="assets/award-icon.png"
                  alt="Award"
                  className="w-full h-full"
                />
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
                  Best Design
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                  Awards
                </p>
              </div>
            </div>

            {/* Shopify Box */}
            <div className="absolute bottom-[-40px] sm:bottom-[-60px] md:bottom-[-80px] left-4 h-40 sm:h-60 p-2 md:p-4 rounded-full  z-40 scale-[0.75] sm:scale-90 md:scale-100 bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full p-[8px] md:p-[10px] animate-spin [animation-duration:8s] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-colors duration-500">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <SiShopify className="text-[#96BF47] text-xl sm:text-2xl md:text-3xl" />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 right-20 text-xl sm:text-2xl md:text-3xl">
              🎅
            </div>
            <div className="absolute top-1/4 -left-4 w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 text-yellow-400 text-xl sm:text-2xl">
              ★
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="relative right-0 left-0 mt-8 py-6 sm:py-8 w-full bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)] backdrop-blur-sm z-30">
          {/* Background effect with light effect */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(138, 92, 246, 0.1) 1px, transparent 3px), linear-gradient(90deg, rgba(138, 92, 246, 0.1) 1px, transparent 3px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <p className="text-white mb-4 text-center sm:text-left text-sm sm:text-base">
              Work For All This Brand & Client
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-900/40 rounded-full flex items-center justify-center bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
                <FaAirbnb className="text-[#ffffff] text-lg sm:text-xl md:text-2xl" />
              </div>

              <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-purple-900/40 rounded-full  flex items-center justify-center bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
                <FaDropbox className="text-[#ffffff] text-lg sm:text-xl md:text-2xl" />
              </div>

              <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-900/40 rounded-full  flex items-center justify-center bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
                <SiUpwork className="text-[#ffffff] text-xl sm:text-2xl md:text-3xl" />
              </div>

              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-purple-900/40 rounded-full  flex items-center justify-center shadow-purple-600/50 bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
                <SiShopify className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

<style jsx>{`
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }

  .animate-spin-slower {
    animation: spin-slow 3s linear infinite;
  }
`}</style>;
