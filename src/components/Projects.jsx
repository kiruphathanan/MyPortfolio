// src/components/Projects.jsx
import React from 'react';
import { useGsap } from '../hooks/useGsap';

const Projects = ({ darkMode }) => {
  const scope = useGsap();
  
  const projects = [
    {
      title: "WiFiChat Connect",
      description: "Local WiFi-based real-time chat application",
      features: [
        "Built using MERN stack and Socket.IO for communication over local WiFi",
        "Supported file/PDF sharing, typing indicators, and group/direct messaging",
        "Integrated admin dashboard for approved WiFi IPs and online-user tracking"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
      gradient: "from-purple-500 to-pink-500",
      icon: "💬",
      bgColor: "bg-gradient-to-br from-purple-900/20 to-pink-900/20"
    },
    {
      title: "AquaPure Eco Bottle", 
      description: "Scroll-triggered interactive storytelling website using React + GSAP",
      features: [
        "Built using React.js with GSAP ScrollTrigger for smooth scroll-based animations",
        "Implemented parallax effects and 3D transitions across 5 story sections", 
        "Custom GSAP context hooks for optimized animation performance"
      ],
      technologies: ["React", "GSAP", "Tailwind CSS", "3D Transforms"],
      gradient: "from-blue-500 to-teal-500",
      icon: "💧",
      bgColor: "bg-gradient-to-br from-blue-900/20 to-teal-900/20"
    }
  ];

  return (
    <section id="projects" ref={scope} className="py-12 md:py-16 flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 
          data-animate="fadeInUp"
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            PROJECTS
          </span>
        </h2>
        
        <p 
          data-animate="fadeInUp"
          data-delay="0.1"
          className="text-gray-400 text-center mb-6 text-base"
        >
          My recent creative works
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              data-animate="scaleIn"
              data-delay={0.2 + (index * 0.2)}
              className={`${project.bgColor} backdrop-blur-sm rounded-2xl border border-white/10 p-5`}
            >
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white text-sm mr-3`}>
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-xs">{project.description}</p>
                </div>
              </div>
              
              <ul className="space-y-1 mb-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-xs">
                    <span className="text-green-400 mr-2 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-white text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;