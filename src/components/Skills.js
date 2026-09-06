import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/profile';
import Icon from './icons';
import Section from './Section';
import styles from './Skills.module.css';

const Skills = () => (
  <Section
    id="skills"
    tone="subtle"
    eyebrow="Toolkit"
    title="Skills"
    lead="Tools I have used to ship something real, grouped by where they sit in the stack."
  >
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
    >
      {skillGroups.map((group) => (
        <motion.div
          key={group.title}
          className={styles.card}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <div className={styles.header}>
            <span className={styles.icon}>
              <Icon name={group.icon} />
            </span>
            <h3 className={styles.groupTitle}>{group.title}</h3>
          </div>
          <ul className={styles.list}>
            {group.skills.map((skill) => (
              <li key={skill} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

export default Skills;
