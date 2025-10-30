// src/components/Contact.jsx
import React, { useState } from 'react';
import { useGsap } from '../hooks/useGsap';
import emailjs from '@emailjs/browser';

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
  name: formData.name,
  from_email: formData.email,
  message: formData.message,
};


      // Send email using EmailJS
      await emailjs.send(
        "service_l1twjhk",      // Replace with your EmailJS service ID
        "template_yozrtga",     // Replace with your EmailJS template ID
        templateParams,
        "Q8z42G4gxCfzH66AU",       // Replace with your EmailJS public key
      );

      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" ref={scope} className="py-16 md:py-20 flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 
          data-animate="fadeInUp"
          className="text-3xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            GET IN TOUCH
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div 
            data-animate="fadeInLeft"
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? '📨 Sending...' : '📨 Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Details */}
          <div 
            data-animate="fadeInRight"
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleContactClick(item)}
                    className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg transition-colors ${
                      item.href ? 'hover:bg-white/5 cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 text-lg">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 block">{item.value}</span>
                    </div>
                    {item.href && (
                      <span className="text-green-400 text-sm opacity-70">↗</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Response</h3>
              <p className="text-gray-300 text-sm mb-4">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                please feel free to email me directly.
              </p>
              <div className="flex items-center text-cyan-400 text-sm">
                <span className="mr-2">⚡</span>
                Fast response guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;