import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { affiliations, education } from '../data/profile';
import Section from './Section';
import styles from './Education.module.css';

const Education = () => (
  <Section
    id="education"
    index="07"
    tone="subtle"
    eyebrow="Background"
    title="Education & affiliations"
  >
    <div className={styles.list}>
      {education.map((entry, i) => (
        <article key={entry.degree} className={styles.entry}>
          <p className={styles.period}>{entry.period}</p>

          <div className={styles.body}>
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
        </article>
      ))}
    </div>

    <h3 className={styles.subheading}>Affiliations</h3>

    <div className={styles.affiliations}>
      {affiliations.map((entry) => (
        <a
          key={entry.name}
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.affiliation}
        >
          <span className={styles.monogram} aria-hidden="true">
            {entry.monogram}
          </span>
          <span className={styles.affiliationText}>
            <span className={styles.affiliationName}>{entry.name}</span>
            <span className={styles.affiliationRole}>{entry.role}</span>
          </span>
        </a>
      ))}
    </div>
  </Section>
);

export default Education;
