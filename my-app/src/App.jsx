import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

export default function App() {
  return (
    <div className="text-gray-800">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
