import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about-section section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.h3 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2 }}
      >
        Get to know me
      </motion.h3>
      
      <motion.div 
        className="about-content glass"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className="about-text">
          <motion.p variants={textVariants}>
            I'm a Computer Science undergraduate at Lovely Professional University with a strong foundation in full-stack web development and a growing passion for mobile applications and AI-driven solutions. I build complete, production-ready projects — from scalable e-commerce platforms to cross-platform mobile apps — using the MERN stack and Flutter as my core toolkits.
          </motion.p>
          <motion.p variants={textVariants}>
            I thrive at the intersection of functionality and user experience, crafting interfaces that are responsive, intuitive, and performant across all devices. My internship experience at LPU has honed my skills in mobile app development, real-time data synchronization, and UI optimization.
          </motion.p>
          <motion.p variants={textVariants}>
            I'm a consistent problem solver with a rank of #1 on the Coding Ninjas University Leaderboard. I'm a fast learner who holds multiple certifications and genuinely enjoys taking on projects that push my technical boundaries.
          </motion.p>
        </div>
        <motion.div className="about-action" variants={textVariants}>
          <a href="/resume.pdf" download="Dandhu_Mahendra_Reddy_Resume.pdf" className="btn btn-outline">Download Resume</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
