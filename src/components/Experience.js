import React from 'react';
import { experience } from '../data/profile';
import Section from './Section';
import styles from './Experience.module.css';

const Experience = () => (
  <Section
    id="experience"
    index="04"
    eyebrow="Involvement"
    title="Beyond the coursework"
    lead="Programmes, competitions and campus work."
  >
    <ol className={styles.list}>
      {experience.map((entry, i) => (
        <li key={entry.title} className={styles.entry}>
          <p className={styles.period}>
            {entry.period}
            {entry.kind === 'programme' && (
              <span className={styles.flag}>Selected</span>
            )}
          </p>

          <div className={styles.body}>
            <h3 className={styles.title}>{entry.title}</h3>
            <p className={styles.org}>{entry.organization}</p>
            <p className={styles.description}>{entry.description}</p>
            <ul className={styles.tags}>
              {entry.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
