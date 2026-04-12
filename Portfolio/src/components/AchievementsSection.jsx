import React from 'react';
import { Award, Heart, Zap } from 'lucide-react';
import './AchievementsSection.css';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Coding Ninjas University Leaderboard – Topper",
      details: "Ranked #1 out of 1200+ students from Lovely Professional University, showing excellence in competitive programming and algorithmic problem-solving.",
      icon: <Award size={32} color="#FFD700" />
    },
    {
      title: "Community Volunteer",
      details: "Volunteered in community welfare activities, assisting orphans and elderly individuals, received an NGO certificate in recognition of social contributions.",
      icon: <Heart size={32} color="#FF6B6B" />
    },
    {
      title: "Professional Execution",
      details: "Delivered high-quality work in technical projects, receiving positive feedback for creativity and execution.",
      icon: <Zap size={32} color="#4ECDC4" />
    }
  ];

  return (
    <section id="achievements" className="achievements-section section">
      <h2 className="section-title">Professional Milestones</h2>
      <h3 className="section-subtitle">Achievements</h3>
      
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card glass">
            <div className="achievement-icon-wrapper">
              {item.icon}
            </div>
            <div className="achievement-content">
              <h4 className="achievement-title">{item.title}</h4>
              <p className="achievement-details">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
