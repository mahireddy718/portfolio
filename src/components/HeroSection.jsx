import React from 'react';
import { Link } from 'react-scroll';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20, delay: 0.4 }
    }
  };

  return (
    <section id="hero" className="hero-section section">
      <div className="hero-content-wrapper">
        <motion.div 
          className="hero-text-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Dandhu Mahendra Reddy
          </motion.h1>
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Full Stack Developer
          </motion.h2>
          
          <motion.p variants={itemVariants} className="hero-description">
            Passionate about building intelligent, scalable web applications powered by the MERN stack and AI integrations. Experienced in developing end-to-end solutions — from responsive UIs to robust backend APIs — with a focus on performance, clean code, and real-world impact.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-primary">
              Contact Me
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-80} className="btn btn-outline">
              View Work
            </Link>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/mahireddy718/" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/mahireddy718" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <Github size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src="/profile.jpg" alt="Dandhu Mahendra Reddy" className="hero-profile-pic" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
