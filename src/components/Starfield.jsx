import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Points({ count = 1200 }) {
  const pointsRef = useRef()

  // Generate random positions and colors for the stars
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorPalette = [
      new THREE.Color('#8b5cf6'), // Purple
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#ec4899'), // Pink
      new THREE.Color('#06b6d4'), // Cyan
    ]

    for (let i = 0; i < count; i++) {
      // Distribute points randomly in Z-space
      positions[i * 3] = (Math.random() - 0.5) * 40
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40

      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = randomColor.r
      colors[i * 3 + 1] = randomColor.g
      colors[i * 3 + 2] = randomColor.b
    }
    return [positions, colors]
  }, [count])

  // Animate the points based on time and mouse pointer position
  useFrame((state) => {
    if (!pointsRef.current) return
    const time = state.clock.getElapsedTime()
    
    // Slow drift rotation
    pointsRef.current.rotation.y = time * 0.015
    pointsRef.current.rotation.x = time * 0.008

    // Mouse movement parallax responsiveness
    const targetX = state.pointer.x * 0.8
    const targetY = state.pointer.y * 0.8
    
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.65}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function StarfieldBackground() {
  return (
    <div className="fixed inset-0 -z-20 w-screen h-screen pointer-events-none overflow-hidden bg-[#010002]">
      {/* Deep purple/black cosmic background radial gradient */}
      <div 
        className="absolute inset-0 -z-30 opacity-80"
        style={{
          background: 'radial-gradient(circle at center, #0d011c 0%, #000000 100%)'
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Points />
      </Canvas>
    </div>
  )
}
