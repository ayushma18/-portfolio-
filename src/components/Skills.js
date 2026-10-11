import React from 'react';
import { skillGroups } from '../data/profile';
import Section from './Section';
import styles from './Skills.module.css';

const Skills = () => (
  <Section
    id="skills"
    index="03"
    tone="subtle"
    eyebrow="Toolkit"
    title="What I build with"
    lead="Tools I have used to ship something real, grouped by where they sit in the stack."
  >
    <dl className={styles.table}>
      {skillGroups.map((group, i) => (
        <div key={group.title} className={styles.row}>
          <dt className={styles.group}>{group.title}</dt>
          <dd className={styles.items}>
            {group.skills.map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
