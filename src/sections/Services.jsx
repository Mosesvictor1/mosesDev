import React from "react";
import Tilt from "react-parallax-tilt";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation config with zoom effect for each card
const fadeInUp = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const ServiceCard = ({ icon, title, description, delay }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }} // keeps animation when scrolling in/out
    transition={{ delay }}
    exit={{ opacity: 0, scale: 0.8, y: 40 }}
  >
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="white"
      glarePosition="all"
      scale={1.02}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      transitionSpeed={1500}
      className="group"
    >
      <div className="relative h-[300px] sm:h-[310px]">
        <div
          className="absolute inset-0 bg-purple-950 bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg transform-gpu preserve-3d rotate-x-2 rotate-y-4 translate-z-12"
          style={{
            boxShadow:
              "inset 10px 10px 30px rgba(139, 92, 246, 0.6), inset -10px -10px 30px rgba(67, 40, 145, 0.5)",
          }}
        >
          <div className="absolute inset-0  rounded-2xl" />
          <div className="relative h-full">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                {icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-white mb-4 md:mb-6">{description}</p>
            <div className="flex items-center font-medium cursor-pointer">
              <span className="mr-2 text-orange-500">Learn more</span>
              <FiArrowRight className="text-orange-500" />
            </div>
          </div>
        </div>
        
       
        <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"></div>
        <div className="absolute -bottom-4 left-[10%] right-[10%] h-4 bg-black blur-xl rounded-full -z-10"></div>
      </div>
    </Tilt>
  </motion.div>
);

export default function Services() {
  return (
    <motion.section
      className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-br from-purple-950 via-indigo-950 to-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center mb-2">
        <div className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 mr-2"></div>
        <p className="text-white font-medium">Services</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-0">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Services
          </span>
          <span className="text-white"> I Provide</span>
        </h2>

        {/* Desktop Button */}
        <div className="hidden sm:block text-center mt-8">
          <button className="md:col-span-2 font-bold  bg-purple-900/40 backdrop-blur-md rounded-lg p-4 text-white placeholder-purple-300 border border-purple-700 focus:border-purple-400 outline-none shadow-purple-600/50 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
            
            <div className="relative flex items-center">
              <span className="mr-4 font-medium">View All Services</span>
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <FiArrowRight className="text-white text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <ServiceCard
          icon={<div className="text-orange-600 text-xl font-bold">UX</div>}
          title="UI/UX Design"
          description="Create intuitive and engaging user experiences with modern design principles and innovative interfaces."
          delay={0.1}
        />
        <ServiceCard
          icon={
            <img
              src="assets/bell-icon.png"
              alt="Application"
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='%23EA580C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'%3E%3C/path%3E%3Cpath d='M13.73 21a2 2 0 0 1-3.46 0'%3E%3C/path%3E%3C/svg%3E";
              }}
            />
          }
          title="Application Design"
          description="Design and develop responsive, scalable applications that deliver exceptional user experiences across all platforms."
          delay={0.2}
        />
        <ServiceCard
          icon={
            <div className="relative w-8 h-8">
              <div className="w-full h-3/5 bg-orange-600 rounded-sm"></div>
              <div className="absolute top-3/5 w-full h-2/5 flex">
                <div className="w-1/2 h-full bg-orange-600 rounded-sm"></div>
                <div className="w-1/2 h-full bg-pink-500 rounded-sm"></div>
              </div>
            </div>
          }
          title="Website Design"
          description="Build beautiful, high-performance websites that combine stunning visuals with seamless functionality."
          delay={0.3}
        />
      </div>

      {/* Mobile Button */}
      <div className="sm:hidden flex justify-center mt-8">
        <button className="md:col-span-2 font-bold  bg-purple-900/40 backdrop-blur-md rounded-lg p-4 text-white placeholder-purple-300 border border-purple-700 focus:border-purple-400 outline-none shadow-purple-600/50 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
          
          <div className="relative flex items-center">
            <span className="mr-4 font-medium">View All Services</span>
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
              <FiArrowRight className="text-white text-lg group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </button>
      </div>
    </motion.section>
  );
}
