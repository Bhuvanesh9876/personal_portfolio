import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Resume = () => {
  // Correct way to reference the PDF file in React
  const pdfPath = `/assets/RESUME.pdf`;
  
  // Alternative: If the above doesn't work, try this
  // const pdfPath = '/assets/RESUME.pdf';

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Y_Bhuvanesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Download or view my resume to learn more about my experience and skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="#ffffff"
            scale={1.02}
            transitionSpeed={1200}
            className="glass-effect rounded-2xl p-8 cursor-default"
          >
            <div className="flex flex-col items-center">
              {/* Document Icon */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6 animate-pulse">
                <FileText size={48} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">Y. Bhuvanesh Resume</h3>
              <p className="text-gray-400 text-center mb-8 text-sm sm:text-base">
                Full Stack Developer with experience in modern web technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 glass-effect rounded-full hover:bg-white hover:bg-opacity-10 transition-all text-sm sm:text-base"
                >
                  <ExternalLink size={20} />
                  View Resume
                </motion.a>

                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg transition-all text-sm sm:text-base"
                >
                  <Download size={20} />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;