import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { affiliations, education } from '../data/profile';
import Section from './Section';
import tuLogo from '../images/TU_logo.png';
import unitedLogo from '../images/united_academy_logo.png';
import styles from './Education.module.css';

const logos = { tu: tuLogo, united: unitedLogo };

const Education = () => (
  <Section
    id="education"
    tone="subtle"
    eyebrow="Background"
    title="Education & affiliations"
  >
    <div className={styles.list}>
      {education.map((entry, index) => (
        <motion.article
          key={entry.degree}
          className={styles.card}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className={styles.logoBox}>
            <img
              src={logos[entry.logo]}
              alt=""
              className={styles.logo}
              loading="lazy"
            />
          </div>

          <div className={styles.details}>
            <h3 className={styles.degree}>{entry.degree}</h3>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.institution}
            >
              {entry.institution}
              <FaExternalLinkAlt aria-hidden="true" />
            </a>
            {entry.note && <p className={styles.note}>{entry.note}</p>}
          </div>

          <span className={styles.period}>{entry.period}</span>
        </motion.article>
      ))}
    </div>

    <h3 className={styles.subheading}>Affiliations</h3>

    <div className={styles.affiliations}>
      {affiliations.map((entry, index) => (
        <motion.a
          key={entry.name}
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.affiliation}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className={styles.monogram} aria-hidden="true">
            {entry.monogram}
          </span>
          <span>
            <span className={styles.affiliationName}>{entry.name}</span>
            <span className={styles.affiliationRole}>{entry.role}</span>
          </span>
        </motion.a>
      ))}
    </div>
  </Section>
);

export default Education;
