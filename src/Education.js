import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      level: "Bachelor's Degree",
      university: "Tribhuvan University",
      college: "Pulchowk Campus, Institute of Engineering",
      degree: "Bachelor of Engineering in Computer Engineering",
      duration: "2021 - Present",
      achievements: [
        "I joined politics for the first time as a Treasurer",

        "Participated in various technical workshops and seminars",
        "Involved in research projects under faculty guidance"
      ],
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Artificial Intelligence"
      ]
    },
    {
      level: "Higher Secondary Education (NEB)",
      score: "3.5 GPA",
      duration: "2019 - 2021"
    },
    
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <h3 className={styles.degree}>{edu.level}</h3>
              <span className={styles.duration}>{edu.duration}</span>
            </div>
            {edu.university && (
              <div className={styles.institution}>
                <h4 className={styles.college}>{edu.college}</h4>
                <p className={styles.university}>{edu.university}</p>
              </div>
            )}
            {edu.score && (
              <div className={styles.score}>
                <span className={styles.scoreLabel}>Score: </span>
                <span className={styles.scoreValue}>{edu.score}</span>
              </div>
            )}
            {edu.achievements && (
              <div className={styles.content}>
                <div className={styles.section}>
                  <h5 className={styles.sectionTitle}>Key Achievements</h5>
                  <ul className={styles.list}>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className={styles.listItem}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.section}>
                  <h5 className={styles.sectionTitle}>Key Courses</h5>
                  <div className={styles.courses}>
                    {edu.courses.map((course, idx) => (
                      <span key={idx} className={styles.course}>{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;