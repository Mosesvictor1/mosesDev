import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiReact,
} from "react-icons/si";
import { LuPen } from "react-icons/lu";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  { icon: <FaHtml5 />, name: "HTML", percent: 100 },
  { icon: <FaCss3Alt />, name: "CSS", percent: 100 },
  { icon: <IoLogoJavascript />, name: "JavaScript", percent: 90 },
  { icon: <FaReact />, name: "React JS", percent: 98 },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", percent: 98 },
  { icon: <SiReact />, name: "React Native", percent: 95 },
  { icon: <LuPen />, name: "UI/UX", percent: 90 },
  { icon: <SiAdobephotoshop />, name: "Photoshop", percent: 95 },
  { icon: <SiAdobeillustrator />, name: "Illustrator", percent: 85 },
  { icon: <FaGitAlt />, name: "Git", percent: 95 },
];

const SkillCard = ({ icon, name, percent, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="white"
        glarePosition="all"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={800}
        scale={1.02}
        transitionSpeed={1000}
      >
        <div className="relative w-28 h-36 sm:h-40 bg-black/10 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center justify-center shadow- overflow-hidden">
          {/* Soft Gradient Background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"
            style={{
              boxShadow:
                "inset 10px 10px 30px rgba(139, 92, 246, 0.6), inset -10px -10px 30px rgba(67, 40, 145, 0.5)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl text-gray-800">
                {icon}
              </div>
            </div>
            <div className="text-white font-semibold text-sm text-center">
              {name}
            </div>
            <div className="text-orange-500 font-bold text-sm">{percent}%</div>
          </div>

          {/* Soft bottom shadow */}
          <div className="absolute -bottom-3 left-[10%] right-[10%] h-3 bg-black/20 blur-xl rounded-full -z-10"></div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-purple-950 bg-gradient-to-br from-purple-950 to-indigo-950">
      {/* Background effect with light effect */}
      <div className="absolute inset-0 opacity-20 ">
        <div
          className="absolute inset-0 shadow-2xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse-slower"></div>
      </div>
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-white font-semibold mb-3 text-lg">— My Skillset —</p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-transparent text-white">
            Exploring My Stacks
          </span>
        </h2>

        <p className="text-white text-sm sm:text-base mt-3">
          Technologies I work with every day
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            name={skill.name}
            percent={skill.percent}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
