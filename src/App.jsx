// src/App.jsx
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar';
import DynamicBackground from './components/DynamicBackground';
import LiveStats from './components/LiveStats';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'} transition-all duration-500`}>
      {/* எல்லா Pages-லும் Same Background */}
      <DynamicBackground darkMode={darkMode} />
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-16">
        {/* எல்லா Sections-லும் Same Dynamic Background இருக்கும் */}
        <Hero darkMode={darkMode} />
        <LiveStats darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        
        {/* Inspirational Quote */}
        <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            {/* <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
              "Building ideas into digital reality 💻✨"
            </blockquote>
            <p className="text-gray-200">- Kiruphathanan K</p> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;