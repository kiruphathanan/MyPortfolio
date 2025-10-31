// // src/components/ThreeDName.jsx
// import React, { useRef } from 'react';
// import { useFrame, Canvas } from '@react-three/fiber';
// import { Text, OrbitControls } from '@react-three/drei';

// const ThreeDName = () => {
//   const meshRef = useRef();

//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += delta * 0.2;
//       meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
//       meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
//     }
//   });

//   return (
//     <group ref={meshRef} scale={2}>
//       <Text
//         fontSize={0.8}
//         color="#06B6D4"
//         position={[0, 0, 0]}
//         anchorX="center"
//         anchorY="middle"
//       >
//         KIRUPHATHANAN
//       </Text>
      
//       <pointLight position={[2, 2, 2]} intensity={0.5} color="#06B6D4" />
//       <pointLight position={[-2, -2, -2]} intensity={0.3} color="#8B5CF6" />
//     </group>
//   );
// };

// const ThreeDScene = () => {
//   return (
//     <div className="w-full h-64 md:h-96 bg-transparent rounded-2xl overflow-hidden">
//       <Canvas
//         camera={{ position: [0, 0, 8], fov: 50 }}
//         gl={{ alpha: true, antialias: true }}
//       >
//         <color attach="background" args={['transparent']} />
        
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        
//         <ThreeDName />
        
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 6}
//           autoRotate
//           autoRotateSpeed={2}
//         />
//       </Canvas>
//     </div>
//   );
// };

// export default ThreeDScene;