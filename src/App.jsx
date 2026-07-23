import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Resume from './components/Resume'
import StarfieldBackground from './components/Starfield'

function App() {
  const [physicsMode, setPhysicsMode] = useState('normal') // 'normal', 'float', 'warp'

  return (
    <div className="min-h-screen bg-transparent text-white relative">
      {/* 3D Cosmic Particle Background */}
      <StarfieldBackground mode={physicsMode} />

      <Navbar />
      <Hero setPhysicsMode={setPhysicsMode} />
      <Skills physicsMode={physicsMode} />
      <Projects physicsMode={physicsMode} />
      <Resume />
      <Contact />
      
      {/* Floating background blur elements (preserving design language) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:-top-40 sm:-right-40 sm:w-80 sm:h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:-bottom-40 sm:-left-40 sm:w-80 sm:h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-20 left-20 w-40 h-40 sm:top-40 sm:left-40 sm:w-80 sm:h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  )
}

export default App