import React from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section">
      <h2 className="section-title">Let's work together</h2>
      <h3 className="section-subtitle">Get In Touch</h3>
      
      <div className="contact-container glass">
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Have a project in mind or want to collaborate? I'm always open to new opportunities — feel free to reach out.
            </p>

            <div className="contact-details">
              <a href="mailto:mahireddy7184@gmail.com" className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                mahireddy7184@gmail.com
              </a>
              
              <a href="tel:+917569344304" className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <span>+91-7569344304</span>
              </a>

              <a href="https://www.linkedin.com/in/mahireddy718/" target="_blank" rel="noopener noreferrer" className="contact-item centered">
                <div className="contact-icon"><Linkedin size={24} /></div>
              </a>

              <a href="https://github.com/mahireddy718" target="_blank" rel="noopener noreferrer" className="contact-item centered">
                <div className="contact-icon"><Github size={24} /></div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form action="https://formsubmit.co/mahireddy7184@gmail.com" method="POST" className="contact-form">
              {/* Configuration for FormSubmit */}
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required className="form-input" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" required rows="6" className="form-input"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
