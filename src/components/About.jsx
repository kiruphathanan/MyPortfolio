// src/components/About.jsx
import React from 'react';
import { useGsap } from '../hooks/useGsap';

const About = ({ darkMode }) => {
  const scope = useGsap();

  return (
    <section id="about" ref={scope} className="py-12 md:py-16 flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 
          data-animate="fadeInUp"
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          <span className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
            SUMMARY
          </span>
        </h2>
        
        <div 
          data-animate="fadeInUp"
          data-delay="0.2"
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mb-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Aspiring full-stack web developer with hands-on experience in the MERN stack. 
            Passionate about building real-world applications and writing clean, efficient code. 
            Eager to contribute to impactful tech solutions and grow through meaningful internship experiences.
          </p>
        </div>
        
        <div 
          data-animate="fadeInUp"
          data-delay="0.3"
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          {[
            { number: '2+', text: 'Projects Completed', color: 'from-purple-500 to-pink-500' },
            { number: 'MERN', text: 'Tech Stack', color: 'from-blue-500 to-cyan-500' },
            { number: '100%', text: 'Passionate', color: 'from-green-500 to-emerald-500' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-4 bg-gradient-to-r ${stat.color} rounded-xl text-white transition-all duration-300`}
            >
              <div className="text-xl font-bold mb-1">{stat.number}</div>
              <div className="text-xs opacity-90">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;