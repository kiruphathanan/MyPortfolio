// src/components/SkillsCube.jsx
import React, { useRef, useState } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const SkillsCube = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [activeFace, setActiveFace] = useState(0);

  const skills = [
    { name: 'REACT', color: '#61DAFB' },
    { name: 'NODE.JS', color: '#68A063' },
    { name: 'MONGODB', color: '#47A248' },
    { name: 'EXPRESS', color: '#000000' },
    { name: 'TAILWIND', color: '#06B6D4' },
    { name: 'GSAP', color: '#88CE02' }
  ];

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (!hovered) {
        meshRef.current.rotation.y += delta * 0.5;
        meshRef.current.rotation.x += delta * 0.2;
      }
    }
  });

  return (
    <group ref={meshRef}>
      {[-1, 1].map((x, i) =>
        [-1, 1].map((y, j) =>
          [1, -1].map((z, k) => {
            const index = i * 4 + j * 2 + k;
            return (
              <mesh
                key={index}
                position={[x * 1.2, y * 1.2, z * 1.2]}
                onPointerOver={() => {
                  setHovered(true);
                  setActiveFace(index);
                }}
                onPointerOut={() => setHovered(false)}
                onClick={() => setActiveFace(index)}
              >
                <boxGeometry args={[2, 2, 0.1]} />
                <meshStandardMaterial 
                  color={skills[index]?.color || '#3B82F6'}
                  transparent
                  opacity={activeFace === index ? 1 : 0.7}
                  emissive={activeFace === index ? skills[index]?.color : '#000000'}
                  emissiveIntensity={activeFace === index ? 0.3 : 0}
                />
                <Text
                  position={[0, 0, 0.06]}
                  fontSize={0.3}
                  color="#ffffff"
                  anchorX="center"
                  anchorY="middle"
                >
                  {skills[index]?.name || 'SKILL'}
                </Text>
              </mesh>
            );
          })
        )
      )}
      
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" />
    </group>
  );
};

const SkillsCubeScene = () => {
  return (
    <div className="w-full h-64 md:h-96 bg-gradient-to-br from-gray-900/50 to-purple-900/50 rounded-2xl border border-white/10 overflow-hidden">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={['transparent']} />
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <SkillsCube />
      </Canvas>
    </div>
  );
};

export default SkillsCubeScene;