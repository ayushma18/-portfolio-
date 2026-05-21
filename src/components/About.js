import React from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaBrain, FaCode, FaGlobe, FaMountain, FaGamepad, FaRunning, FaPizzaSlice } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  const interests = [
    { icon: <FaBrain />, label: "Deep Learning Research" },
    { icon: <FaCode />, label: "Web Development" },
    { icon: <FaFlask />, label: "AI & ML Research" },
    { icon: <FaGlobe />, label: "Open Source" },
  ];

  const hobbies = [
    { icon: <FaRunning />, label: "Running" },
    { icon: <FaMountain />, label: "Hiking & Trek" },
    { icon: <FaGamepad />, label: "Games" },
    { icon: <FaPizzaSlice />, label: "Pizza & Momo" },
  ];

  const stats = [
    { number: "82.50%", label: "CNN Model Accuracy" },
    { number: "42", label: "Page Research Report" },
    { number: "5+", label: "Projects Built" },
    { number: "1", label: "Merged OSS PR" },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        <motion.div
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.underline}></div>
        </motion.div>

        <div className={styles.content}>

          {/* Quote */}
          <motion.p
            className={styles.quote}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            "I don't give up when I fail"
          </motion.p>

          {/* Bio */}
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className={styles.description}>
              Hello! I'm <strong>Ayushma</strong>, a 4th-year Computer Engineering undergraduate
              at <strong>Pulchowk Campus, IOE, Tribhuvan University</strong>. I am passionate about
              building intelligent systems and exploring the intersection of
              <strong> deep learning</strong>, <strong>full-stack development</strong>, and
              <strong> academic research</strong>.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Technical Interests */}
          <motion.div
            className={styles.interestsSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionLabel}>Research & Technical Interests</h3>
            <div className={styles.tagsGrid}>
              {interests.map((item, index) => (
                <div key={index} className={styles.tag}>
                  <span className={styles.tagIcon}>{item.icon}</span>
                  <span className={styles.tagLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            className={styles.interestsSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionLabel}>Beyond the Screen</h3>
            <div className={styles.tagsGrid}>
              {hobbies.map((item, index) => (
                <div key={index} className={`${styles.tag} ${styles.hobbyTag}`}>
                  <span className={styles.tagIcon}>{item.icon}</span>
                  <span className={styles.tagLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;