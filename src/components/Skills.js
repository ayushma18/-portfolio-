import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++",level: 90 },
        { name: "Python",level: 98 },
        //{ name: "Java", level: 80 },
        { name: "JavaScript",level: 90 },
        {name: "react.js",level: 90},
        {name: "django", level: 90}
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "React.js", level: 98 },
        //{ name: "Node.js", level: 70 },
        //{ name: "MongoDB", level: 65 }
        {name: "Django", level: 92 }
      ]
    },
    {
      title: "Core Subjects",
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 85 },
        { name: "Database Systems", level: 80 },
        { name: "Operating Systems", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Experiences</h2>
        <div className={styles.content}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progress}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className={styles.progressGlow}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;