import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function QuantumOrbits() {
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const ring3Ref = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.7
      ring1Ref.current.rotation.y = time * 0.9
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.5
      ring2Ref.current.rotation.z = time * 0.8
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = -time * 0.9
      ring3Ref.current.rotation.x = time * 0.6
    }
  })

  return (
    <group>
      {/* Ring 1 - Cyan (Inner Orbit) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.3, 0.08, 16, 80]} />
        <meshBasicMaterial color="#06b6d4" wireframe />
      </mesh>
      
      {/* Ring 2 - Electric Blue (Middle Orbit) */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.9, 0.04, 12, 64]} />
        <meshBasicMaterial color="#3b82f6" wireframe />
      </mesh>

      {/* Ring 3 - Royal Indigo (Outer Orbit) */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[3.4, 0.02, 8, 48]} />
        <meshBasicMaterial color="#6366f1" wireframe />
      </mesh>
    </group>
  )
}

export default function AvatarAura3D() {
  return (
    <div className="absolute inset-[-60px] -z-10 pointer-events-none overflow-visible">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={1.5} />
        <QuantumOrbits />
      </Canvas>
    </div>
  )
}
