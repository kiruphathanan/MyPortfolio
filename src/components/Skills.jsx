// src/components/Skills.jsx
import React from 'react';
import { useGsap } from '../hooks/useGsap';
import SkillsCubeScene from './SkillsCube';

const Skills = ({ darkMode }) => {
  const scope = useGsap();
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-900/20 to-pink-900/20"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js"],
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-500", 
      bgColor: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "Database",
      skills: ["MongoDB"],
      icon: "💾",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-900/20 to-emerald-900/20"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "JWT", "GSAP"],
      icon: "🛠️",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-900/20 to-red-900/20"
    },
    {
      title: "Deployment", 
      skills: ["Vercel", "Render", "Railway"],
      icon: "🚀",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-900/20 to-orange-900/20"
    }
  ];

  return (
    <section id="skills" ref={scope} className="py-12 flex items-center justify-center px-4 relative">
      {/* Reduced padding from min-h-screen to py-12 */}
      <div className="max-w-7xl mx-auto w-full">
        <h2 
          data-animate="fadeInUp"
          className="text-3xl md:text-5xl font-bold mb-6 text-center"
        >
          {/* Reduced mb-8 to mb-6 */}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SKILLS & TECHNOLOGIES
          </span>
        </h2>
        
        <p 
          data-animate="fadeInUp"
          data-delay="0.1"
          className="text-gray-400 text-center mb-8 text-lg"
        >
          {/* Reduced mb-12 to mb-8 */}
          Technologies I work with and love
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Reduced gap-12 to gap-8 */}
          
          {/* 3D Skills Cube */}
          <div 
            data-animate="fadeInLeft"
            data-delay="0.2"
            className="order-2 lg:order-1"
          >
            <SkillsCubeScene />
            <p className="text-center text-gray-400 text-sm mt-3">
              {/* Reduced mt-4 to mt-3 */}
              🎯 Click and drag to rotate • Hover to highlight skills
            </p>
          </div>

          {/* Skills List */}
          <div 
            data-animate="fadeInRight"
            data-delay="0.3"
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Reduced gap-4 to gap-3 */}
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className={`${category.bgColor} backdrop-blur-sm p-4 rounded-2xl border-2 border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl`}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-3">
                    {/* Reduced mb-4 to mb-3 */}
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white text-sm mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between group">
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                          {skill}
                        </span>
                        <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transform origin-left transition-all duration-1000 group-hover:scale-105`}
                            style={{ 
                              width: `${90 - (skillIndex * 5)}%`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;