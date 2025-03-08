import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WebSkills: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">Web Skills</h2>
    <p className="text-lg text-center max-w-md text-gray-300">
      React, TypeScript, NextJS, and backend technologies
    </p>
  </div>
);

const CPPSkills: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">C++ Skills</h2>
    <p className="text-lg text-center max-w-md text-gray-300">
      High-performance C++ development, templates, concurrency
    </p>
  </div>
);

const DevOpsSkills: React.FC = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">DevOps Skills</h2>
    <p className="text-lg text-center max-w-md text-gray-300">
      Server management, Docker, CI/CD pipelines, cloud services
    </p>
  </div>
);

const SkillsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent) => {
    if (isTransitioning) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (e.deltaY > 0) {
      if (currentIndex < 2) {
        e.preventDefault();
        e.stopPropagation();
        setIsTransitioning(true);
        setCurrentIndex(currentIndex + 1);
        setTimeout(() => setIsTransitioning(false), 600);
      }
    }
    else if (e.deltaY < 0) {
      if (currentIndex > 0) {
        e.preventDefault();
        e.stopPropagation();
        setIsTransitioning(true);
        setCurrentIndex(currentIndex - 1);
        setTimeout(() => setIsTransitioning(false), 600);
      }
    }
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    node.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      node.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex, isTransitioning]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-screen snap-start flex items-center justify-center bg-gray-900"
    >
      <div className="w-4/5 h-4/5 flex shadow-lg shadow-black rounded-lg overflow-hidden bg-gray-800">
        <div className="w-1/4 bg-gray-700 p-4 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-full h-full">

          <button
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(0);
                setTimeout(() => setIsTransitioning(false), 600);
              }
            }}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && !isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(0);
                setTimeout(() => setIsTransitioning(false), 600);
              }
            }}
            className={`pr-2 my-2 flex gap-3 items-center justify-center cursor-pointer transition-colors w-full text-center ${currentIndex === 0
              ? 'bg-gray-600 text-white'
              : 'bg-transparent text-gray-300 hover:bg-gray-600'
              }`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 ${currentIndex === 0 ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                }`}
            />
            Web Skills
          </button>
          <button
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(1);
                setTimeout(() => setIsTransitioning(false), 600);
              }
            }}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && !isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(1);
                setTimeout(() => setIsTransitioning(false), 600);
              }
            }}
            className={`p-2 my-2 flex gap-3 items-center justify-center  cursor-pointer transition-colors w-full text-center ${currentIndex === 1
              ? 'bg-gray-600 text-white'
              : 'bg-transparent text-gray-300 hover:bg-gray-600'
              }`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 ${currentIndex === 1 ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                }`}
            />
            C++ Skills
          </button>
          <button
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(2);
                setTimeout(() => setIsTransitioning(false), 600);
              }
            }}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && !isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(2);
                setTimeout(() => setIsTransitioning(false), 600);
              }
            }}
            className={`p-2 my-2 flex gap-3 items-center justify-center  cursor-pointer transition-colors w-full text-center ${currentIndex === 2
              ? 'bg-gray-600 text-white'
              : 'bg-transparent text-gray-300 hover:bg-gray-600'
              }`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 ${currentIndex === 2 ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                }`}
            />
            DevOps Skills
          </button>
        </div>
        </div>

        <div className="relative w-3/4 p-8 bg-gray-800 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex flex-col justify-center items-center text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {currentIndex === 0 && <WebSkills />}
              {currentIndex === 1 && <CPPSkills />}
              {currentIndex === 2 && <DevOpsSkills />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
