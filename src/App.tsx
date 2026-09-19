import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Academics } from './components/Academics';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full max-w-full overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        {/* Subtle Ambient Background Gradients for VisionOS Glass Effect */}
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden w-full max-w-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="w-full max-w-full overflow-x-hidden">
          <Hero onOpenCaseStudy={setSelectedCaseStudy} />
          <About />
          <Projects onOpenCaseStudy={setSelectedCaseStudy} />
          <Skills />
          <Academics />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Case Study Modal */}
        <ProjectCaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
