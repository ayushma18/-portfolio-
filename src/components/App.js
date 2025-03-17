import React from 'react';
import styles from './App.module.css';
//import './App.module.css';
//import myPhoto from '../photo.js';
// Components
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

const App = () => {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Ayushma Pudasaini</div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;