import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Education', to: 'education' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <Link to="hero" smooth={true} duration={500} offset={-80}>
            Dandhu<span className="accent">.</span>
          </Link>
        </div>

        <div className={`nav-links ${menuOpen ? 'open glass' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="active"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-outline nav-contact-btn">
            Contact Me
          </Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
