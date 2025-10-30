// src/components/Hero.jsx
import React from 'react';
import { useGsap } from '../hooks/useGsap';
import TypingAnimation from './TypingAnimation';

const Hero = ({ darkMode }) => {
  const scope = useGsap();

  const contactItems = [
    { 
      icon: '📧', 
      text: 'kirupha2005@gmail.com', 
      color: 'from-emerald-400 to-green-500',
      href: 'mailto:kirupha2005@gmail.com',
      type: 'email'
    },
    { 
      icon: '🔗', 
      text: 'LinkedIn', 
      color: 'from-blue-400 to-cyan-500',
      href: 'https://linkedin.com/in/kiruphathanan-k-5342522a6',
      type: 'linkedin'
    },
    { 
      icon: '⚡', 
      text: 'GitHub', 
      color: 'from-purple-400 to-pink-500',
      href: 'https://github.com/kiruphathanan',
      type: 'github'
    },
    { 
      icon: '', 
      text: 'Rasipuram, India', 
      href: null,
      type: 'location'
    }
  ];

  const typingTexts = [
    'Full Stack Developer',
    'MERN Stack Specialist', 
    'React & Node.js Expert',
    'Digital Craftsman',
    'Tech Innovator'
  ];

  const handleContactClick = (item) => {
    if (item.href) {
      if (item.type === 'email') {
        window.location.href = item.href;
      } else {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <section id="home" ref={scope} className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Simple Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Simple Greeting */}
            <div 
              data-animate="fadeInUp"
              className="text-lg md:text-xl text-cyan-400 mb-4 font-medium"
            >
              Hello, I'm
            </div>
            
            {/* Name - Combined "Kiruphathanan K" with reduced size */}
            <div className="relative mb-6">
              <h1 
                data-animate="fadeInUp"
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">
                  Kiruphathanan K
                </span>
              </h1>
            </div>
            
            {/* Typing Animation */}
            <div 
              data-animate="fadeInUp"
              data-delay="0.2"
              className="text-xl md:text-2xl text-gray-300 mb-8 font-light h-8 flex items-center justify-center lg:justify-start"
            >
              <TypingAnimation texts={typingTexts} speed={80} pauseTime={1500} />
            </div>

            {/* Description */}
            <p 
              data-animate="fadeInUp"
              data-delay="0.3"
              className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl"
            >
              Crafting <span className="text-cyan-400 font-semibold">digital experiences</span> that 
              blend innovation with functionality. Specializing in modern web technologies to build 
              scalable solutions.
            </p>

            {/* Contact Info */}
            <div 
              data-animate="fadeInUp"
              data-delay="0.4"
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {contactItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleContactClick(item)}
                  className={`flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg text-gray-300 transition-all duration-300 ${
                    item.href ? 'hover:bg-white/10 hover:text-white cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-xs md:text-sm">{item.text}</span>
                  {item.href && item.type !== 'email' && (
                    <span className="text-xs opacity-70">↗</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Image Section - SIZE REDUCED BY 20px */}
          <div 
            data-animate="fadeInRight"
            data-delay="0.5"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px]">
              {/* DIRECT SVG IMAGE - NO BACKGROUND */}
              <img 
                src="./src/components/images/Version control-amico.svg" 
                alt="Full Stack Developer Illustration" 
                className="w-full h-full object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Simple Fallback - NO BLUE BACKGROUND */}
              <div className="hidden absolute inset-0 flex-col items-center justify-center text-center">
                <div className="text-8xl mb-6 text-cyan-400">💻</div>
                <div className="text-2xl font-bold text-cyan-300 mb-2">Full Stack Developer</div>
                <div className="text-gray-400 text-lg">Digital Innovation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Scroll Indicator */}
        {/* <div 
          data-animate="fadeInUp"
          data-delay="0.6"
          className="mt-12 text-center"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-gray-400 text-sm">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;