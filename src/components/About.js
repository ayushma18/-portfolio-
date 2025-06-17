import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          About Me
          <div className={styles.underline}></div>
        </h2>
        <div className={styles.content}>
          <p className={styles.quote}>
            "I don’t give up when I fail"
          </p>
          <div className={styles.text}>
            <p className={styles.description}>
              Hello! I'm <strong>Ayushma</strong>, an enthusiastic Computer Engineering undergraduate with a passion for
              exploring the endless possibilities in technology. Currently, I'm diving deep into the world
              of <strong>Web Development</strong>, <strong>AI</strong>, and <strong>Machine Learning</strong>, constantly seeking opportunities to learn and grow.
              My journey in tech has been enriched through active participation in hackathons and tech communities.
            </p>
            <p className={styles.interests}>
              🍕 I love to watch <strong>movies</strong>, <strong>run</strong>, playing <strong>games</strong>, <strong>hiking</strong>, and <strong>trek</strong>. I love to eat <strong>pizza</strong> and <strong>momo</strong>.
            </p>
            <p className={styles.techInterests}>
              My technical interests include <strong>Web Development</strong>, <strong>AI</strong>, and <strong>Machine Learning</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;