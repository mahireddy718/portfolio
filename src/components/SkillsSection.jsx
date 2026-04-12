import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaDocker, FaUsers, FaBrain, FaHandshake, FaLightbulb, FaComments, FaCode, FaDatabase
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiTailwindcss, SiMysql, SiFlutter, SiDart, 
  SiCplusplus, SiC, SiPostman, SiPostgresql, SiFirebase
} from 'react-icons/si';
import { motion } from 'framer-motion';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'C', icon: <SiC color="#A8B9CC" /> },
        { name: 'Dart', icon: <SiDart color="#0175C2" /> },
      ]
    },
    {
      title: 'Web Frameworks & Tech',
      skills: [
        { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express.js', icon: <SiExpress color="var(--text-primary)" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
      ]
    },
    {
      title: 'Database Skills',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'VS Code', icon: <FaCode color="#007ACC" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'phpMyAdmin', icon: <FaDatabase color="#6C757D" /> },
        { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
        { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'GitHub', icon: <FaGithub color="var(--text-primary)" /> },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem-Solving', icon: <FaBrain color="#FFD700" /> },
        { name: 'Ownership', icon: <FaLightbulb color="#FFA500" /> },
        { name: 'Collaboration', icon: <FaUsers color="#00CED1" /> },
        { name: 'Decision-Making', icon: <FaHandshake color="#9370DB" /> },
        { name: 'Communication', icon: <FaComments color="#FF69B4" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section id="skills" className="skills-section section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Technical Expertise
      </motion.h2>
      <motion.h3 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2 }}
      >
        My professional toolkit
      </motion.h3>
      
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div key={catIndex} className="skill-category-group" variants={categoryVariants}>
            <h4 className="skill-category-title">{category.title}</h4>
            <div className="tech-icons-grid">
              {category.skills.map((skill, index) => (
                <motion.div key={index} className="tech-icon-card glass" variants={iconVariants}>
                  <div className="tech-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="tech-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
