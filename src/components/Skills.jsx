// src/components/Skills.jsx
import React from 'react';
import { useGsap } from '../hooks/useGsap';

const Skills = ({ darkMode }) => {
  const scope = useGsap();
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js"],
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Database",
      skills: ["MongoDB"],
      icon: "💾", 
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "JWT", "GSAP"],
      icon: "🛠️",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Deployment",
      skills: ["Vercel", "Render", "Railway"], 
      icon: "🚀",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" ref={scope} className="py-12 md:py-16 flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto w-full">
        <h2 
          data-animate="fadeInUp"
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SKILLS & TECHNOLOGIES
          </span>
        </h2>
        
        <p 
          data-animate="fadeInUp"
          data-delay="0.1"
          className="text-gray-400 text-center mb-8 text-base"
        >
          Technologies I work with
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-animate="fadeInUp"
              data-delay={0.2 + (index * 0.1)}
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
            >
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white text-sm mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">
                      {skill}
                    </span>
                    <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        style={{ width: `${90 - (skillIndex * 5)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;