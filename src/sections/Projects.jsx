import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Web3 Services  Web - App Design",
      tags: ["Web Development", "Web Design", "Wireframe"],
      image: "assets/webbo3.png",
      link: "https://webbo3-0-w2w7.vercel.app/",
    },
    {
      id: 2,
      title: "Appointments  Website - Doctor Appointments  Web App Solution",
      tags: ["Frontend Dev", "Web Design", "Wireframe"],
      image: "assets/MosesCare.png",
      link: "https://moses-care.vercel.app/",
    },
    {
      id: 3,
      title: "Restaurant Product, UI Design",
      tags: ["UI/UX Design", "Web Design", "Wireframe"],
      image: "assets/Orderuk.png",
      link: "https://www.figma.com/design/JceAaJ8ewZZy0S2d2nX0dI/Food-Ordering-web-app-by-Victor-Moses?node-id=0-1&t=JyxcDw9cl2HsWb3f-1",
    },
    {
      id: 4,
      title: "Product Branding - Product Branding Design",
      tags: ["Graphics Design", "Graphics", "Branding"],
      image:
        "assets/Branding.jpg",
    },
  ];

  return (
    <div
      className="bg-gradient-to-br from-purple-950 via-indigo-950 to-black py-10 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      {/* Floating Lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse-fast"></div>
      </div>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <div className="flex items-center mb-1">
              <div className="w-4 h-0.5 bg-gray-400 mr-2"></div>
              <span className="text-white text-xs sm:text-sm font-medium">
                My Portfolio
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl text-white md:text-4xl font-bold">
              My Latest <span className="text-yellow-500">Projects</span>
            </h2>
          </div>

          <button className="flex items-center gap-2 md:col-span-2 font-bold  bg-black text-white text-sm rounded-full py-1.5 px-4  bg-purple-900/40 backdrop-blur-md p-4 placeholder-purple-300 border border-purple-700 focus:border-purple-400 outline-none  shadow-purple-600/50 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]">
            View All Projects
            <div className="bg-white rounded-full p-1">
              <ArrowRight size={16} className="text-green-800" />
            </div>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileOutOfView={{ opacity: 0, y: 50 }}
            transition={{
              delay: index * 0.2, // Staggered animation
              duration: 0.6,
              ease: "easeOut",
            }}
            key={project.id}
            className=" rounded-xl overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300  bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)]"
          >
            {/* Project Image */}
            <div className="relative aspect-[4/3]  rounded-xl overflow-hidden group bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover  w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div>
                <div className="flex flex-wrap gap-2 mb-2 ">
                  {project.tags.map((tag, idx) => {
                    const tagColor =
                      idx % 2 === 0
                        ? "bg-orange-400 text-black "
                        : "bg-green-800 text-white";

                    return (
                      <span
                        key={tag}
                        className={`${tagColor} text-xs px-3 py-2 rounded-full font-medium`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <h3 className="font-semibold text-white text-sm md:text-base line-clamp-2">
                  {project.title}
                </h3>
              </div>

              <a href={project.link} target="_blank">
                <button className=" text-white p-2 rounded-full flex items-center justify-center hover:bg-green-700 transition duration-300  bg-purple-950  shadow-purple-400 shadow-[inset_0_4px_20px_rgba(139,92,246,0.8)]">
                  <ArrowRight size={30} />
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
