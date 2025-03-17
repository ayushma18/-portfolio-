import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}>
                AP
              </div>
            </div>
            <div className={styles.pattern}></div>
          </div>
          <div className={styles.text}>
            <p className={styles.description}>
              I am a passionate Computer Engineering student at Pulchowk Campus, Institute of Engineering,
              where I'm pursuing my Bachelor's degree. With a strong foundation in computer science and
              engineering principles, I'm dedicated to exploring innovative solutions in technology.
            </p>
            <p className={styles.description}>
              My academic journey at one of Nepal's most prestigious engineering institutions has equipped
              me with both theoretical knowledge and practical skills in various aspects of computer
              engineering, including software development, hardware design, and system architecture.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>10+</span>
                <span className={styles.highlightText}>Projects</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>5+</span>
                <span className={styles.highlightText}>Awards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;