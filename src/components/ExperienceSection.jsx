import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Mobile Application Development Using Flutter | GitHub",
      role: "Training Intern",
      period: "Jun 25 - Jul 25",
      location: "Remote / LPU",
      description: [
        "Engineered LPUTOUCH, a Flutter-based mobile application replicating the official university app and supporting 6+ campus service modules, providing centralized access to academic and administrative services for students.",
        "Implemented Firebase Authentication and Realtime Database, enabling secure user login and real-time data synchronization across multiple screens, which improved data consistency and reduced authentication-related issues.",
        "Optimized UI rendering and application performance by reducing screen load times by ~30%, contributing to a 25% increase in user engagement during internal testing and demo usage.",
        "Tech Stack: Flutter, Dart, Firebase"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <section id="experience" className="experience-section section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Professional Experience
      </motion.h2>
      <motion.h3 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2 }}
      >
        Internships & Roles
      </motion.h3>
      
      <motion.div 
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} className="experience-card glass" variants={cardVariants}>
            <div className="experience-header">
              <div className="experience-title-group">
                <h4 className="experience-company">{exp.company}</h4>
                <h5 className="experience-role">{exp.role}</h5>
              </div>
              <div className="experience-meta">
                <span className="experience-period">
                  <Calendar size={14} /> {exp.period}
                </span>
                <span className="experience-location">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, i) => (
                <li key={i}>
                  <CheckCircle size={16} className="bullet-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
