import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Subsection data
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

  /**
   * Handle wheel events:
   * - When NOT at a boundary (first/last subsection), prevent default and stop propagation.
   * - When at a boundary, allow the event to bubble so that free scrolling happens.
   */
  const handleWheel = (e: WheelEvent) => {
    if (isTransitioning) {
      // If a transition is happening, block additional wheel events.
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Scrolling down
    if (e.deltaY > 0) {
      if (currentIndex < sections.length - 1) {
        // Not at the last subsection: lock the scroll and move to the next subsection.
        e.preventDefault();
        e.stopPropagation();
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => setIsTransitioning(false), 600);
      }
      // Else: at the last subsection—allow default so the page scrolls out.
    } 
    // Scrolling up
    else if (e.deltaY < 0) {
      if (currentIndex > 0) {
        // Not at the first subsection: lock the scroll and move to the previous subsection.
        e.preventDefault();
        e.stopPropagation();
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => setIsTransitioning(false), 600);
      }
      // Else: at the first subsection—allow default so the page scrolls out.
    }
  };

  // Attach a non‑passive wheel event listener to the section.
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
        {/* Left-hand navigation menu */}
        <div className="w-1/4 bg-gray-700 p-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`p-2 my-2 cursor-pointer transition-colors ${
                index === currentIndex
                  ? 'bg-gray-600 text-white'
                  : 'bg-transparent text-gray-300 hover:bg-gray-600'
              }`}
            >
              {section.title}
            </div>
          ))}
        </div>

        {/* Right-hand content panel */}
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
