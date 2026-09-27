import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FocusAreas } from './components/FocusAreas';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { OtherProjects } from './components/OtherProjects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <FocusAreas />
        <Skills />
        <FeaturedProject />
        <OtherProjects />
        <Journey />
        <Contact />
      </main>

      {/* Light Footer */}
      <Footer />
    </div>
  );
};

export default App;
