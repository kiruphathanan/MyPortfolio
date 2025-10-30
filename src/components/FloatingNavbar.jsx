// src/components/FloatingNavbar.jsx
import React, { useState } from 'react';

const FloatingNavbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Name */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold">Kiruphathanan K</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-110 transition-transform duration-300"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? '🌞' : '🌙'}
              </button>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                    activeSection === item.id
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}

              {/* Resume Download */}
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="px-3 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105 transition-all duration-300"
              >
                📄 View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;