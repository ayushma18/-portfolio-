import React from 'react';
import { motion } from 'framer-motion';
import { focusAreas, profile } from '../data/profile';
import Icon from './icons';
import Section from './Section';
import styles from './About.module.css';

const About = () => (
  <Section
    id="about"
    tone="subtle"
    eyebrow="About"
    title="Building the model and everything around it"
  >
    <div className={styles.layout}>
      <motion.div
        className={styles.bio}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <blockquote className={styles.quote}>{profile.quote}</blockquote>
      </motion.div>

      <motion.ul
        className={styles.focusGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {focusAreas.map((area) => (
          <motion.li
            key={area.title}
            className={styles.focusCard}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            <span className={styles.focusIcon}>
              <Icon name={area.icon} />
            </span>
            <h3 className={styles.focusTitle}>{area.title}</h3>
            <p className={styles.focusBody}>{area.body}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </Section>
);

export default About;
