// src/components/Education.jsx
import React from 'react';
import { useGsap } from '../hooks/useGsap';

const Education = ({ darkMode }) => {
  const scope = useGsap();
  
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Muthayammal Engineering College, Rasipuram",
      period: "2023 - 2027", 
      status: "Pursuing",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Computer Science Stream and Mathematics",
      institution: "G.K. Matriculation Higher Secondary School, Rasipuram",
      period: "2021 - 2023",
      status: "Completed", 
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="education" ref={scope} className="min-h-screen flex items-center justify-center px-4 relative">
      {/* இந்த section-லும் DynamicBackground வேலை செய்யும் */}
      <div className="max-w-4xl mx-auto">
        <h2 
          data-animate="fadeInUp"
          className="text-3xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            EDUCATION
          </span>
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              data-animate="fadeInLeft"
              data-delay={0.2 + (index * 0.2)}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-400 text-sm md:text-base">{edu.institution}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${edu.gradient} rounded-full text-white text-xs font-medium mb-4 md:mb-0`}>
                  {edu.period}
                </span>
              </div>
              
              <div className="flex items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'Pursuing' 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;