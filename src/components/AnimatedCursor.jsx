// // src/components/AnimatedCursor.jsx
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const AnimatedCursor = () => {
//   const cursorRef = useRef();
//   const followerRef = useRef();

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const follower = followerRef.current;

//     if (!cursor || !follower) return;

//     // Mouse move event
//     const handleMouseMove = (e) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.1,
//         ease: 'power2.out'
//       });

//       gsap.to(follower, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.3,
//         ease: 'power2.out'
//       });
//     };

//     // Mouse enter/leave for interactive elements
//     const handleMouseEnter = () => {
//       gsap.to(cursor, { scale: 1.5, duration: 0.3 });
//       gsap.to(follower, { scale: 2, duration: 0.3 });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(cursor, { scale: 1, duration: 0.3 });
//       gsap.to(follower, { scale: 1, duration: 0.3 });
//     };

//     // Add event listeners
//     window.addEventListener('mousemove', handleMouseMove);
    
//     const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
//     interactiveElements.forEach(el => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     // Hide cursor on mouse leave window
//     const handleMouseLeaveWindow = () => {
//       gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
//     };

//     const handleMouseEnterWindow = () => {
//       gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
//     };

//     document.addEventListener('mouseleave', handleMouseLeaveWindow);
//     document.addEventListener('mouseenter', handleMouseEnterWindow);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       interactiveElements.forEach(el => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//       document.removeEventListener('mouseleave', handleMouseLeaveWindow);
//       document.removeEventListener('mouseenter', handleMouseEnterWindow);
//     };
//   }, []);

//   return (
//     <>
//       {/* Main cursor */}
//       <div
//         ref={cursorRef}
//         className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference"
//         style={{
//           left: -10,
//           top: -10,
//           background: 'rgba(255, 255, 255, 0.9)',
//           borderRadius: '50%',
//           transform: 'translate(-50%, -50%)'
//         }}
//       />
      
//       {/* Cursor follower */}
//       <div
//         ref={followerRef}
//         className="fixed w-8 h-8 pointer-events-none z-50"
//         style={{
//           left: -16,
//           top: -16,
//           border: '2px solid rgba(6, 182, 212, 0.8)',
//           borderRadius: '50%',
//           transform: 'translate(-50%, -50%)'
//         }}
//       />
//     </>
//   );
// };

// export default AnimatedCursor;