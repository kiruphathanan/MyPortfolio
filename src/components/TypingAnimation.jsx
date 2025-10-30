// src/components/TypingAnimation.jsx
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const TypingAnimation = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const textRef = useRef();

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setLoopCount(prev => prev + 1);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, texts, speed, deleteSpeed, pauseTime]);

  // Cursor blink animation
  useEffect(() => {
    if (textRef.current) {
      gsap.to('.typing-cursor', {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, []);

  return (
    <div ref={textRef} className="inline-flex items-center">
      <span className="text-cyan-400 font-semibold">
        {displayText}
      </span>
      <span className="typing-cursor ml-1 w-2 h-6 bg-cyan-400 inline-block"></span>
    </div>
  );
};

export default TypingAnimation;