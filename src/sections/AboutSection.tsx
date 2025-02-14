import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center 
                 bg-gray-900 snap-start"
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-xl text-center text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a developer specialized in web development, C++ programming, and DevOps.
      </motion.p>
    </section>
  );
};

export default AboutSection;
