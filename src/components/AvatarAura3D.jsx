import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function TorusRing() {
  const meshRef = useRef()
  const outerMeshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.5
      meshRef.current.rotation.y = time * 0.8
    }
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x = -time * 0.3
      outerMeshRef.current.rotation.y = time * 0.4
    }
  })

  return (
    <group>
      {/* Inner glowing neon torus */}
      <mesh ref={meshRef}>
        <torusGeometry args={[2.5, 0.12, 16, 100]} />
        <meshBasicMaterial color="#a855f7" wireframe />
      </mesh>
      
      {/* Outer wider neon ring */}
      <mesh ref={outerMeshRef}>
        <torusGeometry args={[3.2, 0.06, 8, 64]} />
        <meshBasicMaterial color="#ec4899" wireframe />
      </mesh>
    </group>
  )
}

export default function AvatarAura3D() {
  return (
    <div className="absolute inset-[-40px] -z-10 pointer-events-none overflow-visible">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={1.5} />
        <TorusRing />
      </Canvas>
    </div>
  )
}
