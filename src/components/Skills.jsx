import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Palette, Cloud, Smartphone, Server } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"],
      color: "from-indigo-600 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA"],
      color: "from-indigo-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion", "WebGL"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase", "Redis", "GraphQL"],
      color: "from-yellow-500 to-amber-500"
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
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
                className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 card-hover group cursor-pointer h-full"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} className="sm:w-8 sm:h-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:gradient-text transition-all duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm sm:text-base">{skill}</span>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: skillIndex * 0.1 + 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 ml-2"
                      />
                    </div>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bars for Key Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto"
        >
          <Tilt
            perspective={1200}
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="#ffffff"
            scale={1.01}
            transitionSpeed={1500}
            className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 cursor-default"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Technical Proficiency</h3>
            <div className="space-y-4 sm:space-y-6">
              {[
                { skill: "React/Next.js", level: 90 },
                { skill: "JavaScript/TypeScript", level: 85 },
                { skill: "Node.js/Express", level: 80 },
                { skill: "Python/Django", level: 75 },
                { skill: "UI/UX Design", level: 70 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-cyan-400">{item.level}%</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills