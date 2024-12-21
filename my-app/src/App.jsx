import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Schools from './components/Schools';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';
import './styles/tailwind.css'

export default function App() {
  return (
    <div className="text-gray-800 bg-bg">
      <Hero />
      <About />
      <Journey />
      <Schools />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
