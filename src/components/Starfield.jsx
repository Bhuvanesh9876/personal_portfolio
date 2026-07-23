import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Points({ count = 1000 }) {
  const pointsRef = useRef()
  const attribRef = useRef()

  // Generate random positions, colors, speed multipliers, and original coordinates
  const [positions, colors, originalPositions, speeds] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const originalPositions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    
    const colorPalette = [
      new THREE.Color('#3b82f6'), // Royal Blue
      new THREE.Color('#06b6d4'), // Cyber Cyan
      new THREE.Color('#6366f1'), // Indigo
      new THREE.Color('#0ea5e9'), // Sky Blue
      new THREE.Color('#1d4ed8'), // Electric Blue
    ]

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 45
      const y = (Math.random() - 0.5) * 45
      const z = (Math.random() - 0.5) * 45

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      originalPositions[i * 3] = x
      originalPositions[i * 3 + 1] = y
      originalPositions[i * 3 + 2] = z

      speeds[i] = 0.2 + Math.random() * 0.8

      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = randomColor.r
      colors[i * 3 + 1] = randomColor.g
      colors[i * 3 + 2] = randomColor.b
    }
    return [positions, colors, originalPositions, speeds]
  }, [count])

  // Mouse interaction: apply force towards pointer
  const pointer3D = new THREE.Vector3()
  
  useFrame((state) => {
    if (!pointsRef.current || !attribRef.current) return
    const time = state.clock.getElapsedTime()
    const posArr = attribRef.current.array

    // Calculate pointer in 3D space relative to camera view plane
    pointer3D.set(state.pointer.x * 12, state.pointer.y * 8, 0)

    for (let i = 0; i < count; i++) {
      const idx = i * 3
      const oX = originalPositions[idx]
      const oY = originalPositions[idx + 1]
      const oZ = originalPositions[idx + 2]
      const speed = speeds[i]

      // Add gentle wave float / twinkle animation
      const waveX = Math.sin(time * 0.15 + oZ) * 0.08
      const waveY = Math.cos(time * 0.15 + oX) * 0.08
      
      let targetX = oX + waveX
      let targetY = oY + waveY
      let targetZ = oZ

      // Calculate distance to pointer
      const dx = pointer3D.x - posArr[idx]
      const dy = pointer3D.y - posArr[idx + 1]
      const dist = Math.sqrt(dx * dx + dy * dy)

      // Interactive gravity force (pull stars slightly toward mouse within a range)
      if (dist < 6) {
        const force = (6 - dist) * 0.06 * speed
        targetX += dx * force
        targetY += dy * force
      }

      // Smooth interpolation to target positions
      posArr[idx] += (targetX - posArr[idx]) * 0.1
      posArr[idx + 1] += (targetY - posArr[idx + 1]) * 0.1
      posArr[idx + 2] += (targetZ - posArr[idx + 2]) * 0.1
    }

    attribRef.current.needsUpdate = true

    // Slow background rotation
    pointsRef.current.rotation.y = time * 0.008
    pointsRef.current.rotation.x = time * 0.004

    // Subtle overall parallax
    const globalTargetX = state.pointer.x * 1.5
    const globalTargetY = state.pointer.y * 1.5
    pointsRef.current.position.x += (globalTargetX - pointsRef.current.position.x) * 0.05
    pointsRef.current.position.y += (globalTargetY - pointsRef.current.position.y) * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          ref={attribRef}
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        sizeAttenuation={true}
        vertexColors
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function NebulaClouds({ count = 12 }) {
  const meshRef = useRef()

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorPalette = [
      new THREE.Color('#1e3a8a'), // Deep Blue
      new THREE.Color('#312e81'), // Deep Indigo
      new THREE.Color('#0f172a'), // Slate Blue
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15

      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = randomColor.r
      colors[i * 3 + 1] = randomColor.g
      colors[i * 3 + 2] = randomColor.b
    }

    return [positions, colors]
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.z = -time * 0.002
    meshRef.current.rotation.y = time * 0.001
  })

  // Generates circular gradient texture for gas effect
  const gasTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)')
    gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.04)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 128, 128)
    return new THREE.CanvasTexture(canvas)
  }, [])

  return (
    <points ref={meshRef}>
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
        size={8.0}
        map={gasTexture}
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
        className="absolute inset-0 -z-30 opacity-90"
        style={{
          background: 'radial-gradient(circle at center, #0a0118 0%, #000000 100%)'
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <Points />
        <NebulaClouds />
      </Canvas>
    </div>
  )
}
