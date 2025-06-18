import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub, FaEllipsisV, FaTimes } from 'react-icons/fa';
import styles from './App.module.css';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Achievements from './Achievements';
import Certificates from './Certificates';
import Contact from './Contact';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10; // Change color after scrolling 10px
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>Ayushma Pudasaini</div>
      
      {/* Desktop Navigation */}
      <div className={styles.navCenter}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#achievements">Achievements</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
      
      {/* Desktop Social Links */}
      <div className={styles.socialLinks}>
        <a href="https://youtube.com/@ayushmapoudasaini" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
        <a href="https://www.instagram.com/ayusha.020/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://linkedin.com/in/ayushma-pudasaini-443677276" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/ayushma18" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaEllipsisV />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className={styles.mobileMenuOverlay}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.mobileMenuContent}>
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            <a href="#experience" onClick={closeMobileMenu}>Experience</a>
            <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            <a href="#education" onClick={closeMobileMenu}>Education</a>
            <a href="#achievements" onClick={closeMobileMenu}>Achievements</a>
            <a href="#certificates" onClick={closeMobileMenu}>Certificates</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            
            <div className={styles.mobileSocialLinks}>
              <a href="https://youtube.com/@ayushmapoudasaini" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://www.instagram.com/ayusha.020/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com/in/ayushma-pudasaini-443677276" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/ayushma18" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const App = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <main id="home">
        <Hero />
      </main>
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Achievements />
      <Certificates />
      <Contact />
    </div>
  );
};

export default App;