import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoadingAnimation = () => {
  const fishRef = useRef(null);
  const bubbleRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🐟 Fish swimming side to side
      gsap.to(fishRef.current, {
        x: 100,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });

      // 🫧 Floating bubbles animation
      gsap.utils.toArray(bubbleRef.current).forEach((bubble, i) => {
        gsap.to(bubble, {
          y: -150,
          opacity: 0,
          duration: 3 + i,
          delay: i * 0.5,
          repeat: -1,
          ease: "power1.inOut",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center overflow-hidden z-50">
      {/* Fish */}
      <div
        ref={fishRef}
        className="relative w-28 h-20 text-cyan-300 mx-auto mb-10"
      >
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full"
          fill="currentColor"
        >
          <path d="M10 50 Q60 10, 120 40 Q140 50, 120 60 Q60 90, 10 50 Z" />
          <polygon points="120,40 180,20 160,50 180,80 120,60" />
          <circle cx="30" cy="45" r="5" fill="white" />
        </svg>
      </div>

      {/* Bubbles */}
      <div className="absolute bottom-10 flex justify-center gap-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (bubbleRef.current[i] = el)}
            className="w-4 h-4 bg-cyan-200 rounded-full opacity-70"
            style={{
              left: `${40 + i * 30}px`,
              position: "absolute",
              bottom: "0px",
            }}
          ></div>
        ))}
      </div>

      {/* Text */}
      <div className="absolute bottom-24 text-center text-white">
        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Kiruphathanan K
        </h2>
        <p className="text-sm opacity-80 tracking-wide animate-pulse">
          Swimming into your experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
