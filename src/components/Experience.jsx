// src/components/Experience.jsx
import React from 'react';
import { useGsap } from '../hooks/useGsap';

const Experience = ({ darkMode }) => {
  const scope = useGsap();
  
  const experiences = [
    {
      title: "Full Stack Developer – Project Internship (MERN Stack)",
      company: "Muthayammal Engineering College, Rasipuram", 
      period: "Jun 2025 – Jul 2025",
      achievements: [
        "Developed WiFiChat Connect using MongoDB, Express.js, React.js and Node.js",
        "Implemented IP-restricted login, group/direct messaging, file sharing and message status features",
        "Managed user session data (login/logout times, online duration) in MongoDB"
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" ref={scope} className="py-12 md:py-16 flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 
          data-animate="fadeInUp"
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            EXPERIENCE
          </span>
        </h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-animate="fadeInRight"
              data-delay="0.2"
              className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-2xl border border-white/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                <div className="mb-2 lg:mb-0">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-400 text-sm">{exp.company}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${exp.gradient} rounded-full text-white text-xs font-medium`}>
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <span className="text-green-400 mr-2 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;