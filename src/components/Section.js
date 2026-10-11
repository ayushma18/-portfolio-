import React from 'react';
import styles from './Section.module.css';

/**
 * The shell every section shares. The page is organised like a printed
 * document: each section is announced by a numbered rule, with its label in
 * the left rail and the title set against it on the right.
 *
 * `index` is the section's printed number ("01"). It is passed in from App
 * rather than derived, so the running order stays visible in one file.
 *
 * Nothing here animates on scroll. A reveal-on-scroll would mean every section
 * starts invisible and depends on JavaScript to become readable, and the
 * effect is the house style of every generated portfolio. Printed matter does
 * not fade in.
 */
const Section = ({ id, index, eyebrow, title, lead, tone = 'default', children }) => (
  <section id={id} className={`${styles.section} ${styles[tone]}`}>
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.rule} aria-hidden="true" />

        <div className={styles.headRow}>
          <p className={styles.rail}>
            <span className={styles.index}>{index}</span>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          </p>

          <div className={styles.headText}>
            <h2 className={styles.title}>{title}</h2>
            {lead && <p className={styles.lead}>{lead}</p>}
          </div>
        </div>
      </header>

      {children}
    </div>
  </section>
);

export default Section;
