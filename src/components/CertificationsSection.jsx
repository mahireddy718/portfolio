import React from 'react';
import { Award, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import './CertificationsSection.css';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Master Generative AI & Generative AI tools (ChatGPT & more)',
      issuer: 'UDEMY',
      description: 'Comprehensive course on LLMs, prompt engineering, and AI-driven development tools.',
      icon: <Award size={32} className="cert-icon" />,
      period: 'Aug 18, 2025',
      image: '/certificates/udemy-gen-ai.png',
      link: 'https://drive.google.com/drive/folders/1VYo-aHDDDUgVnM2vFqwO7AbJhK53NcaH?usp=sharing'
    },
    {
      title: 'Mobile Application Development using Flutter',
      issuer: 'LPU (CPE)',
      description: 'Internship-based certification focusing on cross-platform mobile apps and Firebase integration.',
      icon: <ShieldCheck size={32} className="cert-icon" />,
      period: 'Aug 13, 2025',
      image: '/certificates/lpu-flutter.png',
      link: 'https://drive.google.com/drive/folders/1VYo-aHDDDUgVnM2vFqwO7AbJhK53NcaH?usp=sharing'
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL / IIT Kharagpur',
      description: 'In-depth study of cloud infrastructure, virtualization, and distributed systems.',
      icon: <CheckCircle size={32} className="cert-icon" />,
      period: 'Jan-Apr 2025',
      image: '/certificates/nptel-cloud.png',
      link: 'https://drive.google.com/drive/folders/1VYo-aHDDDUgVnM2vFqwO7AbJhK53NcaH?usp=sharing'
    },
    {
      title: 'Data Structures and Algorithm',
      issuer: 'iamneo (LPU)',
      description: 'Intensive training on advanced algorithms, data structures, and competitive programming.',
      icon: <Award size={32} className="cert-icon" />,
      period: 'Dec 05, 2024',
      image: '/certificates/iamneo-dsa.pdf',
      link: 'https://drive.google.com/drive/folders/1VYo-aHDDDUgVnM2vFqwO7AbJhK53NcaH?usp=sharing'
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google / Coursera',
      description: 'Google-provided course covering networking fundamentals, protocols, and troubleshooting.',
      icon: <ShieldCheck size={32} className="cert-icon" />,
      period: 'Sep 07, 2024',
      image: '/certificates/google-networking.png',
      link: 'https://drive.google.com/drive/folders/1VYo-aHDDDUgVnM2vFqwO7AbJhK53NcaH?usp=sharing'
    }
  ];

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
    <section id="certifications" className="certifications-section section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Credentials
      </motion.h2>
      <motion.h3 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2 }}
      >
        Certifications & Achievements
      </motion.h3>

      <motion.div 
        className="certs-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certifications.map((cert, index) => (
          <motion.a key={index} href={cert.link || cert.image} target="_blank" rel="noopener noreferrer" className="cert-card-link" variants={cardVariants}>
            <div className="cert-card glass">
              <div className="cert-preview">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="cert-img" 
                       onError={(e) => {
                         e.target.parentElement.innerHTML = `<div class="cert-placeholder"><div class="placeholder-icon">${cert.issuer.charAt(0)}</div><p>Click to View Certificate</p></div>`;
                       }} />
                ) : (
                  <div className="cert-placeholder">
                    <div className="placeholder-icon">{cert.issuer.charAt(0)}</div>
                    <p>Click to View Certificate</p>
                  </div>
                )}
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  {cert.icon}
                  <h4 className="cert-title">{cert.title}</h4>
                </div>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-period">{cert.period}</span>
                </div>
                <p className="cert-desc">{cert.description}</p>
                <div className="cert-action">
                  <span className="view-link">
                    Open Certificate <ExternalLink size={16} />
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
