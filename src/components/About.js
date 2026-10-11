import React from 'react';
import { focusAreas, profile } from '../data/profile';
import Section from './Section';
import styles from './About.module.css';

const About = () => (
  <Section
    id="about"
    index="02"
    eyebrow="Profile"
    title="Building the model and everything around it"
  >
    <div className={styles.layout}>
      <div className={styles.bio}>
        {profile.bio.map((paragraph, i) => (
          <p key={paragraph} className={i === 0 ? styles.lede : undefined}>
            {paragraph}
          </p>
        ))}

        <blockquote className={styles.quote}>{profile.quote}</blockquote>
      </div>

      <ol className={styles.focus}>
        {focusAreas.map((area, i) => (
          <li key={area.title} className={styles.focusRow}>
            <span className={styles.focusNum} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className={styles.focusTitle}>{area.title}</h3>
              <p className={styles.focusBody}>{area.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);

export default About;
