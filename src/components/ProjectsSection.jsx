import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Marketing Website',
      description: 'Architected a scalable full-stack e-commerce platform enabling product browsing, cart management, and persistent user sessions, designed to support 500+ concurrent test users without performance degradation. Developed a React.js frontend integrated with Node.js and Express.js APIs, processing bulk uploads of 1,000+ products.',
      image: '/image.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Postman'],
      links: {
        github: 'https://github.com/mahireddy718',
        live: 'https://marketgen-ai-ecommerce.vercel.app/'
      }
    },
    {
      title: 'Virtual Storefront',
      description: 'Delivered a virtual storefront supporting end-to-end product ordering, allowing users to browse, adding items to the cart, and place orders for 100+ products smoothly. Built a fully responsive user interface using HTML and Tailwind CSS with a PHP backend.',
      image: '/patient.png',
      tags: ['HTML5', 'Tailwind CSS', 'PHP', 'MySQL', 'RESTful APIs'],
      links: {
        github: 'https://github.com/mahireddy718',
      }
    }
  ];

  const tagImages = {
    'React': 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'Node.js': 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    'Express': 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
    'MongoDB': 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white',
    'Gemini AI': 'https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white',
    'Tailwind CSS': 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
    'HTML5': 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'CSS3': 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'JavaScript': 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    'Bootstrap': 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
    'PHP': 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
    'MySQL': 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
    'Flutter': 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white',
    'Dart': 'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white',
    'Firebase Auth': 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black',
    'Firebase Realtime Database': 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="projects" className="projects-section section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Some of My Work
      </motion.h2>
      <motion.h3 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2 }}
      >
        Projects
      </motion.h3>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} className="project-card glass" variants={cardVariants}>
            {project.image ? (
              project.links && project.links.live && project.links.live !== '#' ? (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              ) : (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              )
            ) : (
              <div className="project-image-placeholder">
                <span className="project-image-initials">
                  {project.title.split(' — ')[0].substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            
            <div className="project-content">
              <h4 className="project-title">
                {project.links && project.links.live && project.links.live !== '#' ? (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-title-link">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h4>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  tagImages[tag] ? (
                    <img key={i} src={tagImages[tag]} alt={tag} className="project-badge" />
                  ) : (
                    <span key={i} className="project-tag">{tag}</span>
                  )
                ))}
              </div>
              
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-link-btn">
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-link-btn">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
