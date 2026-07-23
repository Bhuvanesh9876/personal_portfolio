import React from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy, Star, Target, Users, Zap } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "1st Place - University Tech Fest 2023",
      count: "1st",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Award,
      title: "Scholarship Recipient",
      description: "Merit-based Academic Scholarship",
      count: "3x",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "Open Source Contributor",
      description: "Active contributor to major projects",
      count: "50+",
      color: "from-indigo-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Projects Completed",
      description: "Personal and academic projects",
      count: "25+",
      color: "from-indigo-600 to-blue-500"
    },
    {
      icon: Users,
      title: "Team Projects",
      description: "Successful collaborative projects",
      count: "15+",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Certifications",
      description: "Professional certifications earned",
      count: "12",
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      badge: "🛠️"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      badge: "☁️"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      badge: "⚛️"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2022",
      badge: "🐍"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      badge: "💻"
    },
    {
      name: "UI/UX Design Specialization",
      issuer: "Google",
      date: "2022",
      badge: "🎨"
    }
  ]

  return (
    <section id="achievements" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span> & Certifications
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Recognition and credentials that showcase my dedication and expertise
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover group"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon size={24} className="sm:w-8 sm:h-8 text-white" />
              </div>
              
              <div className="flex items-end justify-between mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:gradient-text transition-all">
                  {achievement.count}
                </h3>
                <div className="text-right">
                  <h4 className="text-base sm:text-lg font-semibold text-white">{achievement.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Professional Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-white hover:bg-opacity-5 transition-all cursor-pointer"
              >
                <div className="text-2xl sm:text-3xl">{cert.badge}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-white truncate">{cert.name}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{cert.issuer}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-cyan-400 font-medium text-sm sm:text-base">{cert.date}</span>
                  <div className="text-xs text-gray-500">Issued</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Achievement Timeline</h3>
          
          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on md and up */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-500"></div>
            
            {/* Timeline items */}
            {[
              { year: "2023", event: "Won University Hackathon", description: "Developed an AI-powered solution for climate change" },
              { year: "2022", event: "Earned AWS Certification", description: "Became certified AWS Cloud Practitioner" },
              { year: "2022", event: "Started Open Source Contributions", description: "Began contributing to major React projects" },
              { year: "2021", event: "First Internship", description: "Software Development Intern at Tech Startup" },
              { year: "2020", event: "Started Computer Science Degree", description: "Began academic journey in technology" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-6 sm:mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} mb-4 md:mb-0`}>
                  <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block w-full md:w-auto">
                    <div className="text-cyan-400 font-bold text-base sm:text-lg">{item.year}</div>
                    <div className="text-white font-semibold text-lg sm:text-xl mb-2">{item.event}</div>
                    <div className="text-gray-400 text-sm sm:text-base">{item.description}</div>
                  </div>
                </div>
                
                <div className="hidden md:block w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 border-4 border-black z-10"></div>
                
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements