// src/components/Contact.jsx
import React, { useState } from 'react';
import { useGsap } from '../hooks/useGsap';

const Contact = ({ darkMode }) => {
  const scope = useGsap();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { 
      key: 'email',
      value: 'kirupha2005@gmail.com',
      icon: '📧',
      href: 'mailto:kirupha2005@gmail.com'
    },
    { 
      key: 'linkedin',
      value: 'linkedin.com/in/kiruphathanan-k-5342522a6',
      icon: '🔗',
      href: 'https://linkedin.com/in/kiruphathanan-k-5342522a6'
    },
    { 
      key: 'github',
      value: 'github.com/kiruphathanan',
      icon: '💻',
      href: 'https://github.com/kiruphathanan'
    },
    { 
      key: 'location',
      value: 'Rasipuram, India',
      icon: '📍',
      href: null
    }
  ];

  const certifications = [
    "Web Development Bootcamp (MERN Stack)",
    "Git and GitHub for Beginners",
    "Azure Fundamentals (Microsoft Azure)"
  ];

  const languages = [
    { language: "Tamil", level: "Native" },
    { language: "English", level: "Intermediate" },
    { language: "Hindi", level: "Beginner" }
  ];

  const interests = [
    "Developing webpages and applications",
    "Exploring modern web technologies",
    "Learning new frameworks" 
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleContactClick = (item) => {
    if (item.href) {
      if (item.key === 'email') {
        window.location.href = item.href;
      } else {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <section id="contact" ref={scope} className="py-12 flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 px-4">
      {/* Reduced py-16 md:py-20 to py-12 */}
      <div className="max-w-6xl mx-auto w-full">
        <h2 
          data-animate="fadeInUp"
          className="text-3xl md:text-5xl font-bold mb-6 text-center"
        >
          {/* Reduced mb-8 to mb-6 */}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            GET IN TOUCH
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Reduced gap-8 to gap-6 */}
          
          {/* Contact Form */}
          <div 
            data-animate="fadeInLeft"
            className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl"
          >
            {/* Reduced p-6 to p-5 */}
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              {/* Reduced text-2xl to text-xl, mb-6 to mb-4 */}
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Reduced space-y-4 to space-y-3 */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">
                  {/* Reduced mb-2 to mb-1 */}
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  // Reduced py-3 to py-2
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  // Reduced rows from 5 to 4
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {/* Reduced py-3 to py-2 */}
                {isSubmitting ? 'Sending...' : '📨 Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Details */}
          <div 
            data-animate="fadeInRight"
            className="space-y-4"
          >
            {/* Reduced space-y-6 to space-y-4 */}
            
            {/* Contact Information */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Contact Info
              </h3>
              <div className="space-y-3">
                {/* Reduced space-y-4 to space-y-3 */}
                {contactInfo.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleContactClick(item)}
                    className={`flex items-center space-x-3 w-full text-left p-2 rounded-lg transition-colors ${
                      // Reduced p-3 to p-2
                      item.href ? 'hover:bg-white/5 cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {/* Reduced w-10 h-10 to w-8 h-8 */}
                      <span className="text-green-400 text-sm">
                        {/* Reduced text-lg to text-sm */}
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 text-sm block">{item.value}</span>
                    </div>
                    {item.href && (
                      <span className="text-green-400 text-xs opacity-70">↗</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Reduced gap-4 to gap-3 */}
              
              {/* Certifications */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-2xl border border-white/10">
                {/* Reduced p-4 to p-3 */}
                <h4 className="text-md font-bold text-purple-400 mb-2">
                  {/* Reduced text-lg to text-md, mb-3 to mb-2 */}
                  Certifications
                </h4>
                <ul className="space-y-1">
                  {/* Reduced space-y-2 to space-y-1 */}
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start text-gray-300 text-xs">
                      {/* Reduced text-sm to text-xs */}
                      <span className="text-purple-400 mr-2 mt-0.5">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages & Interests */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-2xl border border-white-10">
                <h4 className="text-md font-bold text-blue-400 mb-2">Languages & Interests</h4>
                
                <div className="mb-2">
                  {/* Reduced mb-3 to mb-2 */}
                  <h5 className="text-xs font-semibold text-white mb-1">
                    {/* Reduced text-sm to text-xs, mb-2 to mb-1 */}
                    Languages
                  </h5>
                  <div className="space-y-1">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300 text-xs">{lang.language}</span>
                        <span className={`px-1 py-0.5 rounded text-xs ${
                          // Reduced px-2 to px-1
                          lang.level === 'Native' 
                            ? 'bg-green-500/20 text-green-400'
                            : lang.level === 'Intermediate'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-semibold text-white mb-1">Interests</h5>
                  <div className="flex flex-wrap gap-1">
                    {interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-1 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div 
          data-animate="fadeInUp"
          className="text-center mt-8 pt-6 border-t border-white/10"
        >
          {/* Reduced mt-12 to mt-8, pt-8 to pt-6 */}
          <p className="text-gray-400 text-sm">
            &copy; 2024 Kiruphathanan K. All rights reserved.
          </p>
          <p className="text-cyan-400 mt-1 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;