import React from 'react';
import { Layers, Lightbulb, Lock, Layout, Database, Smartphone } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'I build end-to-end web applications using React.js on the frontend and Node.js/Express.js on the backend, connected to MongoDB or MySQL databases. From REST API design to deployment on Vercel and Render.',
      icon: <Layers size={32} />
    },
    {
      title: 'AI Integration',
      description: 'I integrate large language model APIs like Google Gemini to add intelligent features — skin analysis, personalized recommendations, smart search — turning standard apps into AI-powered experiences.',
      icon: <Lightbulb size={32} />
    },
    {
      title: 'Authentication & Security',
      description: 'I implement secure user flows using JWT, Google OAuth 2.0, and OTP-based email verification via the Resend API, ensuring protected sessions and access control in every project.',
      icon: <Lock size={32} />
    },
    {
      title: 'Responsive UI Design',
      description: 'I craft visually clean, mobile-first interfaces using Tailwind CSS and Bootstrap, ensuring consistent layouts and smooth experiences across all screen sizes and browsers.',
      icon: <Layout size={32} />
    },
    {
      title: 'Database Design & Optimization',
      description: 'I design efficient relational and NoSQL schemas using MySQL and MongoDB, with a focus on indexing, query optimization, and clean data architecture.',
      icon: <Database size={32} />
    },
    {
      title: 'Mobile App Development',
      description: 'Using Flutter and Dart, I build cross-platform mobile applications with modular UI components, Firebase Authentication, and real-time database integration.',
      icon: <Smartphone size={32} />
    }
  ];

  return (
    <section id="services" className="services-section section">
      <h2 className="section-title">My Services</h2>
      <h3 className="section-subtitle">What I Do</h3>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card glass">
            <div className="service-icon">
              {service.icon}
            </div>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
