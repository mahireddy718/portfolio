import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './EducationSection.css';

const EducationSection = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Aug 23 - Present",
      details: "CGPA: 8.14"
    },
    {
      institution: "Sri Siddartha Junior College",
      location: "Madanapalli, Andhra Pradesh",
      degree: "Intermediate",
      period: "Jun 21 - Mar 23",
      details: "Percentage: 97.7%"
    },
    {
      institution: "Vasishta E.M High School",
      location: "Madanapalli, Andhra Pradesh",
      degree: "Secondary School Certificate",
      period: "Apr 20 - Mar 21",
      details: "Percentage: 100%"
    }
  ];

  return (
    <section id="education" className="education-section section">
      <h2 className="section-title">Academic Journey</h2>
      <h3 className="section-subtitle">Education</h3>

      <div className="education-container">
        {educationData.map((item, index) => (
          <div key={index} className="education-card glass">
            <div className="education-icon-wrapper">
              <GraduationCap size={24} />
            </div>
            <div className="education-content">
              <div className="education-header">
                <h4 className="institution">{item.institution}</h4>
                <span className="period">
                  <Calendar size={14} /> {item.period}
                </span>
              </div>
              <p className="degree">{item.degree}</p>
              <div className="education-footer">
                <span className="location">
                  <MapPin size={14} /> {item.location}
                </span>
                {item.details && <span className="details">{item.details}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
