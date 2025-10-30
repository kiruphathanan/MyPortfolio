// src/components/LiveStats.jsx
import React, { useState, useEffect } from 'react';
import { useGsap } from '../hooks/useGsap';

const LiveStats = ({ darkMode }) => {
  const scope = useGsap();
  const [visitorCount, setVisitorCount] = useState(1274);
  const [currentProject, setCurrentProject] = useState('');

  useEffect(() => {
    // Simulate visitor count increment
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    // Rotating current project text
    const projects = [
      'MERN Stack Chat Application',
      'React Native Mobile App',
      'E-commerce Platform',
      'AI-Powered Web App'
    ];

    let currentIndex = 0;
    const projectInterval = setInterval(() => {
      setCurrentProject(projects[currentIndex]);
      currentIndex = (currentIndex + 1) % projects.length;
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(projectInterval);
    };
  }, []);

  return (
    <section id="stats" ref={scope} className="py-12 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Stats */}
          <div 
            data-animate="fadeInUp"
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-white/10 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-3xl font-bold text-cyan-400 mb-2">24+</div>
            <div className="text-gray-300">GitHub Repositories</div>
            <div className="text-sm text-gray-400 mt-2">Active contributor</div>
          </div>

          {/* Visitor Counter */}
          <div 
            data-animate="fadeInUp"
            data-delay="0.1"
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-white/10 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-3xl font-bold text-green-400 mb-2">{visitorCount.toLocaleString()}</div>
            <div className="text-gray-300">Portfolio Views</div>
            <div className="text-sm text-gray-400 mt-2">Live counter</div>
          </div>

          {/* Current Project */}
          <div 
            data-animate="fadeInUp"
            data-delay="0.2"
            className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-2xl border border-white/10 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-lg font-bold text-yellow-400 mb-2 h-12 flex items-center justify-center">
              {currentProject || 'MERN Stack Chat Application'}
            </div>
            <div className="text-gray-300">Currently Building</div>
            <div className="text-sm text-gray-400 mt-2">Live updates</div>
          </div>
        </div>

        {/* Commit Graph Simulation */}
        <div 
          data-animate="fadeInUp"
          data-delay="0.3"
          className="mt-8 bg-gray-800/30 rounded-2xl p-6 border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 text-center">GitHub Activity</h3>
          <div className="flex justify-center gap-1 h-20 items-end">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t transition-all duration-500 hover:opacity-80"
                style={{
                  width: '12px',
                  height: `${Math.random() * 60 + 20}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;