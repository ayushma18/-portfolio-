import React from 'react';
import { FaCode, FaChartLine, FaCloud, FaGitAlt, FaHtml5, FaAtom } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Front-end Development",
      icon: <FaHtml5 className={styles.icon} />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Programming Languages",
      icon: <FaCode className={styles.icon} />,
      skills: ["Python", "C", "C++"]
    },
    {
      title: "Cloud Platforms",
      icon: <FaCloud className={styles.icon} />,
      skills: ["Amazon Web Services", "Azure"]
    },
    {
      title: "Version Control",
      icon: <FaGitAlt className={styles.icon} />,
      skills: ["Git"]
    },
    {
      title: "Machine Learning Frameworks",
      icon: <FaAtom className={styles.icon} />,
      skills: ["NumPy", "Pandas"]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                {category.icon}
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <ul className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;