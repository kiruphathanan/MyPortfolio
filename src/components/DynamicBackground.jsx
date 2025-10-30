// src/components/DynamicBackground.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DynamicBackground = ({ darkMode }) => {
  const bgRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated gradient background - எல்லா pages-லும் வேலை செய்யும்
      gsap.to(bgRef.current, {
        backgroundPosition: '200% 200%',
        duration: 20,
        repeat: -1,
        ease: 'linear',
        yoyo: true
      });

      // Floating particles animation - எல்லா pages-லும் வேலை செய்யும்
      gsap.to('.floating-particle', {
        y: -20,
        x: 'random(-20, 20)',
        rotation: 'random(-180, 180)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bgRef}
      className={`fixed inset-0 -z-10 transition-all duration-1000 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50'
      }`}
      style={{
        backgroundSize: '400% 400%'
      }}
    >
      {/* Animated Particles - எல்லா pages-லும் இருக்கும் */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="floating-particle absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 8 + 4 + 'px',
            height: Math.random() * 8 + 4 + 'px',
            background: darkMode ? '#06B6D4' : '#3B82F6',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
      
      {/* Animated Grid - எல்லா pages-லும் இருக்கும் */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern w-full h-full"></div>
      </div>
    </div>
  );
};

export default DynamicBackground;