import React from 'react';
import { motion } from 'framer-motion';

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
        viewport={{ once: false}}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {/* Project 1 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.0 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 1</h3>
          <p>This is a brief description of project 1.</p>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 2</h3>
          <p>This is a brief description of project 2.</p>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 3</h3>
          <p>This is a brief description of project 3.</p>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 4</h3>
          <p>This is a brief description of project 4.</p>
        </motion.div>

        {/* Project 5 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 5</h3>
          <p>This is a brief description of project 5.</p>
        </motion.div>

        {/* Project 6 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 6</h3>
          <p>This is a brief description of project 6.</p>
        </motion.div>

        {/* Project 7 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 7</h3>
          <p>This is a brief description of project 7.</p>
        </motion.div>

        {/* Project 8 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 8</h3>
          <p>This is a brief description of project 8.</p>
        </motion.div>

        {/* Project 9 */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 text-gray-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Project 9</h3>
          <p>This is a brief description of project 9.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
