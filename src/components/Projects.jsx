import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Filter } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      fullDescription: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart, payment integration, and admin dashboard. Built with modern web technologies and best practices.",
      image: "/assets/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/Bhuvanesh9876/E-Commerce_clone.git",
      live: "https://example.com",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "CodeGenius AI Code Generator & Debugger",
      description: "AI-powered code generation and intelligent debugging platform",
      fullDescription: "An advanced AI-powered development tool that generates code snippets, debugs errors, and provides intelligent suggestions. Features include multi-language support, real-time error detection, code optimization suggestions, and collaborative debugging sessions.",
      image: "/assets/project2.jpg",
      technologies: ["React-vite", "Node.js", "Javascript", "perplexity API", "Socket.io", "MongoDB"],
      github: "https://github.com/Bhuvanesh9876/CodeGenerator-website.git",
      live: "https://tinyurl.com/aicode-generator-debugger",
      category: "AI Development Tool"
    },
    
    {
      id: 3,
      title: "Fitness Tracker Mobile App",
      description: "Mobile fitness tracking application with workout plans",
      fullDescription: "A comprehensive fitness tracking mobile app with workout plans, progress tracking, social features, and integration with wearable devices. Built with React Native for cross-platform compatibility.",
      image: "/assets/project4.jpg",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      github: "https://github.com/Bhuvanesh9876/fitness_tracking_app.git",
      live: "https://example.com",
      category: "Mobile"
    },
    {
      id: 4,
      title: "AI BASED SMART RESUME SCREENING SYSTEM",
      description: "AI-powered resume screening system for automated candidate shortlisting",
      fullDescription: "An AI-based system that analyzes resumes to rank and shortlist candidates using NLP, skill matching, and scoring algorithms. Built with Python, Flask, and machine learning models.",
      image: "/assets/project5.jpg",
      technologies: ["Python", "Flask", "NLP", "scikit-learn"],
      github: "https://github.com/Bhuvanesh9876/cm_18.git",
      live: "https://example.com",
      category: "AI"
    },
    
  ]

  const categories = ['all', ...new Set(projects.map(project => project.category))]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gray-900 rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-400 hover:text-white transition-colors p-1 sm:p-2"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          <div className="h-40 sm:h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-xl sm:rounded-t-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-4xl sm:text-6xl">🚀</span>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-600 rounded-full text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 sm:px-3 sm:py-1 glass-effect rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{project.title}</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {project.fullDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-4 py-3 sm:px-6 sm:py-3 glass-effect rounded-xl hover:bg-white hover:bg-opacity-10 transition-all text-sm sm:text-base"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
                <span>View Code</span>
              </motion.a>
              
              <motion.a
                href={project.live}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                <span>Live Demo</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'glass-effect text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full h-full"
            >
              <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.03}
                transitionSpeed={1200}
                className="glass-effect rounded-xl sm:rounded-2xl overflow-hidden card-hover group cursor-pointer h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-40 sm:h-48 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                    <span className="text-3xl sm:text-4xl">💻</span>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-black bg-opacity-50 rounded-full text-xs sm:text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:gradient-text transition-all line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400 group-hover:text-purple-300 text-sm font-medium transition-colors">
                      View Details →
                    </span>
                    <div className="flex space-x-2 sm:space-x-3 text-gray-400">
                      <Github size={16} className="sm:w-5 sm:h-5" />
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects