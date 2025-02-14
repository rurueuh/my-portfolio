import React from 'react';
import { motion } from 'framer-motion';

const projects = Array.from({ length: 9 }, (_, i) => ({
  title: `Project ${i + 1}`,
  description: `This is a brief description of project ${i + 1}.`,
}));

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center bg-gray-900 snap-start py-10"
    >
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
