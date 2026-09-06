import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/profile';
import Section from './Section';
import styles from './Experience.module.css';

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Involvement"
    title="Experience"
    lead="Programmes, competitions and campus work outside the coursework."
  >
    <ol className={styles.timeline}>
      {experience.map((entry, index) => (
        <motion.li
          key={entry.title}
          className={styles.entry}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className={styles.marker} aria-hidden="true">
            <span className={styles.dot} />
          </div>

          <div className={styles.card}>
            <div className={styles.head}>
              <div>
                <h3 className={styles.entryTitle}>{entry.title}</h3>
                <p className={styles.org}>{entry.organization}</p>
              </div>
              <span
                className={`${styles.period} ${
                  entry.kind === 'programme' ? styles.highlight : ''
                }`}
              >
                {entry.period}
              </span>
            </div>

            <p className={styles.description}>{entry.description}</p>

            <ul className={styles.tags}>
              {entry.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </ol>
  </Section>
);

export default Experience;
