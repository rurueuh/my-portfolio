import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      title: 'Web Skills',
      content: 'React, TypeScript, NextJS, and backend technologies',
    },
    {
      title: 'C++ Skills',
      content: 'High-performance C++ development, templates, concurrency',
    },
    {
      title: 'DevOps Skills',
      content: 'Server management, Docker, CI/CD pipelines, cloud services',
    },
  ];

  const handleWheel = (e: WheelEvent) => {
    if (isTransitioning) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Scrolling down
    if (e.deltaY > 0) {
      if (currentIndex < sections.length - 1) {
        e.preventDefault();
        e.stopPropagation();
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => setIsTransitioning(false), 600);
      }
    } 
    else if (e.deltaY < 0) {
      if (currentIndex > 0) {
        e.preventDefault();
        e.stopPropagation();
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
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
          <div className="flex flex-col items-center space-y-2 mb-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className={`w-3 h-3 rounded-full border-2 ${
                  section.title === sections[currentIndex].title
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-gray-400'
                }`}
              ></div>
            ))}
          </div>
          {/* Navigation Menu */}
          {sections.map((section) => (
            <button
              key={section.title}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(sections.findIndex(s => s.title === section.title));
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(sections.findIndex(s => s.title === section.title));
                    setTimeout(() => setIsTransitioning(false), 600);
                  }
                }
              }}
              className={`p-2 my-2 cursor-pointer transition-colors w-full text-center ${
                section.title === sections[currentIndex].title
                  ? 'bg-gray-600 text-white'
                  : 'bg-transparent text-gray-300 hover:bg-gray-600'
              }`}
            >
              {section.title}
            </button>
          ))}
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
              <h2 className="text-3xl font-bold mb-4">
                {sections[currentIndex].title}
              </h2>
              <p className="text-lg text-center max-w-md text-gray-300">
                {sections[currentIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
