import React from 'react';
import { motion } from 'framer-motion';
import styles from './Section.module.css';

/**
 * Every section on the page uses this shell, so headings, spacing and the
 * alternating background rhythm stay identical throughout the site.
 */
const Section = ({ id, eyebrow, title, lead, tone = 'default', children }) => (
  <section id={id} className={`${styles.section} ${styles[tone]}`}>
    <div className={styles.container}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.title}>{title}</h2>
        {lead && <p className={styles.lead}>{lead}</p>}
      </motion.header>
      {children}
    </div>
  </section>
);

export default Section;
