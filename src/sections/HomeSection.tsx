// src/sections/HomeSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
// Replace this import with your actual logo file
// import Logo from '../assets/logo.svg';

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center 
                 bg-gradient-to-br from-gray-900 to-gray-800 snap-start"
    >
      {/* <img src={Logo} alt="Logo" className="w-20 h-20 mb-4" /> */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Developer Portfolio
      </motion.h1>
      <motion.p
        className="text-xl mt-4 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to my presentation website.
      </motion.p>
    </section>
  );
};

export default HomeSection;
