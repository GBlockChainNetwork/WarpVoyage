import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Simple warp stars component
function WarpStars({ warpSpeed }: { warpSpeed: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { scene } = useThree();

  useEffect(() => {
    // Create custom starfield for warp
    const count = 10000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

      const color = new THREE.Color().setHSL(Math.random(), 0.7, 0.9);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    pointsRef.current = points;
    scene.add(points);

    return () => { scene.remove(points); };
  }, [scene]);

  useFrame((state) => {
    if (pointsRef.current) {
      const speed = warpSpeed ? 50 : 5;
      pointsRef.current.position.z += speed * 0.1;
      // Reset for infinite feel
      if (pointsRef.current.position.z > 100) pointsRef.current.position.z = -100;
    }
  });

  return null;
}

export default function WarpScene() {
  const [warpSpeed, setWarpSpeed] = useState(false);

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <WarpStars warpSpeed={warpSpeed} />
        <OrbitControls enabled={!warpSpeed} />
      </Canvas>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
        <button
          onClick={() => setWarpSpeed(!warpSpeed)}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-xl font-bold hover:scale-105 transition"
        >
          {warpSpeed ? 'Disengage Warp' : 'ENGAGE WARP!'}
        </button>
      </div>
    </div>
  );
}
