import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import ProjectCards from "../ProjectCards";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements  */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20 select-none"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Recent
            <span className="text-blue-500 font-medium"> Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            A showcase of projects that highlight my skills in creating
            applications, designing interfaces, and solving problems across
            different platforms.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCards
              key={project.id}
              project={project}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
