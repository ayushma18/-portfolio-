import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { profile, socials, stats } from '../data/profile';
import portrait from '../images/ayushma.png';
import styles from './Hero.module.css';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => (
  <section id="home" className={styles.hero}>
    <div className={styles.backdrop} aria-hidden="true" />

    <motion.div
      className={styles.inner}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.content}>
        <motion.p className={styles.location} variants={item}>
          <FaMapMarkerAlt aria-hidden="true" />
          {profile.location}
        </motion.p>

        <motion.h1 className={styles.name} variants={item}>
          {profile.name}
        </motion.h1>

        <motion.p className={styles.role} variants={item}>
          {profile.role}
        </motion.p>

        <motion.p className={styles.tagline} variants={item}>
          {profile.tagline}
        </motion.p>

        <motion.div className={styles.cta} variants={item}>
          <a href="#projects" className={styles.primaryBtn}>
            View projects
            <FaArrowRight aria-hidden="true" />
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get in touch
          </a>
        </motion.div>

        <motion.div className={styles.socials} variants={item}>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.portraitWrap}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.portraitFrame}>
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            className={styles.portrait}
            width="420"
            height="480"
          />
        </div>
      </motion.div>
    </motion.div>

    <motion.dl
      className={styles.stats}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      {stats.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <dt className={styles.statLabel}>{stat.label}</dt>
          <dd className={styles.statValue}>{stat.value}</dd>
        </div>
      ))}
    </motion.dl>
  </section>
);

export default Hero;
