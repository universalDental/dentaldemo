import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function ToothMesh() {
  const group = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouse.current.x = x;
      mouse.current.y = y;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, dt) => {
    if (!group.current) return;
    const targetY = mouse.current.x * 0.6;
    const targetX = -mouse.current.y * 0.4;
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(1, dt * 3);
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(1, dt * 3);
  });

  // Abstract "tooth" — crown (rounded top) + two roots
  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.9}>
        {/* Crown */}
        <mesh position={[0, 0.55, 0]} scale={[1.15, 1, 1.15]}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.15} metalness={0} clearcoat={0.3} />
        </mesh>
        {/* Left root */}
        <mesh position={[-0.38, -0.55, 0]} rotation={[0, 0, 0.15]}>
          <capsuleGeometry args={[0.28, 0.85, 12, 24]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.15} metalness={0} clearcoat={0.3} />
        </mesh>
        {/* Right root */}
        <mesh position={[0.38, -0.55, 0]} rotation={[0, 0, -0.15]}>
          <capsuleGeometry args={[0.28, 0.85, 12, 24]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.15} metalness={0} clearcoat={0.3} />
        </mesh>
        {/* Inner golden glow */}
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshBasicMaterial color={"#e6c079"} transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

export function Tooth3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="h-full w-full grid place-items-center">
        <div className="size-40 rounded-full bg-primary-soft/60 blur-2xl animate-float" />
      </div>
    );
  }
  return (
    <Canvas
      dpr={[1, 1.2]}
      camera={{ position: [0, 0, 4], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color={"#c9e3d7"} />
      <ToothMesh />
      <Environment preset="studio" />
    </Canvas>
  );
}

export default Tooth3D;
