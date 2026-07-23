import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import AvatarAura3D from './AvatarAura3D'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-6 sm:mb-8 relative group"
          >
            {/* 3D Wireframe Glowing Aura */}
            <AvatarAura3D />

            {/* 3D Tilt Wrapper for Avatar */}
            <Tilt
              perspective={800}
              glareEnable={true}
              glareMaxOpacity={0.25}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.05}
              className="w-full h-full cursor-pointer relative z-10 rounded-full"
            >
              {/* Profile Picture Container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 p-1 z-10">
                <div className="w-full h-full rounded-full bg-black overflow-hidden border-2 border-gray-800 shadow-2xl">
                  {/* Your Profile Image from URL */}
                  <img
                    src="https://res.cloudinary.com/drc8bufjn/image/upload/v1759140720/portfolios/xrgfi2lg9kph7d1mjqhh.jpg" // Replace with your actual photo URL
                    alt="Y. Bhuvanesh - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback if image fails to load
                      console.error('Failed to load profile image');
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      fallback.style.display = 'flex';
                    }}
                    onLoad={(e) => {
                      // Image loaded successfully
                      console.log('Profile image loaded successfully');
                      e.target.style.opacity = '1';
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                  />
                  
                  {/* Fallback Avatar - Shows if image fails to load */}
                  <div 
                    className="w-full h-full rounded-full bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center text-white hidden"
                  >
                    <span className="text-xl sm:text-2xl font-bold">YB</span>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Online Status Indicator */}
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-black animate-pulse z-20">
              <div className="w-full h-full rounded-full bg-green-400 animate-ping absolute"></div>
            </div>

            {/* Hover Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 pointer-events-none"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Y. BHUVANESH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4"
          >
            Passionate <span className="text-cyan-400">Computer Science Student</span> &{' '}
            <span className="text-emerald-400">Full Stack Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            I create digital experiences that blend cutting-edge technology with 
            stunning design. Currently pursuing my degree while building amazing projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 glass-effect rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              Let's Connect
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('resume')}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 glass-effect rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              
              Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-4 sm:space-x-6 mb-16 sm:mb-20"
          >
            {[
              { icon: Github, href: "https://github.com/Bhuvanesh9876", color: "hover:text-cyan-400", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/yakkaladevi-bhuvanesh-591a51318", color: "hover:text-blue-400", label: "LinkedIn" },
              { icon: Mail, href: "https://mailto:yakkaladevibhuvanesh@gmail.com", color: "hover:text-red-400", label: "Email" }
            ].map(({ icon: Icon, href, color, label }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, y: -5 }}
                className={`text-gray-400 ${color} transition-all duration-300 p-2 rounded-lg hover:bg-white hover:bg-opacity-10`}
                aria-label={label}
              >
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => scrollToSection('skills')}
            className="cursor-pointer"
          >
            <ChevronDown size={24} className="sm:w-8 sm:h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero