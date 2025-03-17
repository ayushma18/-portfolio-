import React from 'react';
import styles from './Hero.module.css';
import Photo from './Photo';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.greeting}>Hello, I'm</span>
            <span className={styles.name}>Ayushma Pudasaini</span>
            <span className={styles.role}>Computer Engineering Student</span>
          </h1>
          <p className={styles.subtitle}>
            Pursuing B.E. in Computer Engineering at Pulchowk Campus
          </p>
          <div className={styles.cta}>
            <a href="#contact" className={styles.primaryBtn}>
              Get in Touch
            </a>
            <a href="#about" className={styles.secondaryBtn}>
              Learn More
            </a>
          </div>
        </div>
        <div className={styles.photoContainer}>
          <Photo />
        </div>
      </div>
      <div className={styles.shapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
    </section>
  );
};

export default Hero;