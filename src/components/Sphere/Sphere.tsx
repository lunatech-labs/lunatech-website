import { useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Points } from 'three';

import './Sphere.scss';

interface CustomGeometryParticlesProps {
  count: number;
  shape: 'box' | 'sphere';
}

const CustomGeometryParticles = ({ count, shape }: CustomGeometryParticlesProps) => {
  const points = useRef<Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 2;
        const y = (Math.random() - 0.5) * 2;
        const z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }

    if (shape === "sphere") {
      const distance = 1;
     
      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360); 
        const phi = THREE.MathUtils.randFloatSpread(360); 

        const x = distance * Math.sin(theta) * Math.cos(phi)
        const y = distance * Math.sin(theta) * Math.sin(phi);
        const z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#5786F5" sizeAttenuation depthWrite={false} />
    </points>
  );
};

const Scene = () => {
  return (
    <div className="sphere">
      <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={0.5} />
        {/* Try to change the shape prop to "box" and hit reload! */}
        <CustomGeometryParticles count={2000} shape="sphere"/>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
    
  );
};


export default Scene;
