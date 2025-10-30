// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  // Your Google Drive Resume Link
  const resumeLink = 'https://drive.google.com/file/d/1o62PCWNIIXN6VbLh04QUt7mayFL2x3v8/view?usp=drive_link';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleResumeView = () => {
    window.open(resumeLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">Kiruphathanan K</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-cyan-500 text-white scale-110'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Theme Toggle */}
              {/* <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300 ml-2"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? '🌞' : '🌙'}
              </button> */}

              {/* View Resume - UPDATED WITH GOOGLE DRIVE LINK */}
              <button
                onClick={handleResumeView}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium hover:scale-105 transition-all duration-300 ml-2"
              >
                📄 View Resume
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-gray-700 text-white">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;