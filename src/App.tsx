// src/App.tsx
import React from 'react';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ExperiencesSection from './sections/ExperiencesSection';

const App: React.FC = () => {
  return (
    // Use dark background and white text globally
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen bg-gray-900 text-white">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperiencesSection />
      <ContactSection />
    </div>
  );
};

export default App;
