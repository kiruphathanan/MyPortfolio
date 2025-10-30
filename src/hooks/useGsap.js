// src/hooks/useGsap.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsap = () => {
  const scope = useRef();

  useEffect(() => {
    if (scope.current) {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('[data-animate]').forEach(element => {
          const animation = element.getAttribute('data-animate') || 'fadeInUp';
          const delay = element.getAttribute('data-delay') || 0;
          
          switch(animation) {
            case 'fadeInUp':
              gsap.fromTo(element, 
                { y: 50, opacity: 0 },
                { 
                  y: 0, 
                  opacity: 1, 
                  duration: 1,
                  delay: parseFloat(delay),
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                  }
                }
              );
              break;
            case 'fadeInLeft':
              gsap.fromTo(element,
                { x: -50, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  duration: 1,
                  delay: parseFloat(delay),
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                  }
                }
              );
              break;
            case 'fadeInRight':
              gsap.fromTo(element,
                { x: 50, opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  duration: 1,
                  delay: parseFloat(delay),
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                  }
                }
              );
              break;
            case 'scaleIn':
              gsap.fromTo(element,
                { scale: 0.8, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 1,
                  delay: parseFloat(delay),
                  ease: 'back.out(1.7)',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                  }
                }
              );
              break;
          }
        });
      }, scope.current);

      return () => ctx.revert();
    }
  }, []);

  return scope;
};