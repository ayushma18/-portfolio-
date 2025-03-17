import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const education = {
    university: "Tribhuvan University",
    college: "Pulchowk Campus, Institute of Engineering",
    degree: "Bachelor of Engineering in Computer Engineering",
    duration: "2021 - Present",
    achievements: [
      "Dean's List recipient for academic excellence",
      "First-year class representative",
      "Member of Computer Engineering Students' Society",
      "Participated in various technical workshops and seminars",
      "Involved in research projects under faculty guidance"
    ],
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      //"Computer Networks",
      "Operating Systems",
      "Artificial Intelligence",
      //"Software Engineering"
    ]
  };

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.card}>
          <div className={styles.header}>
            <h3 className={styles.degree}>{education.degree}</h3>
            <span className={styles.duration}>{education.duration}</span>
          </div>
          <div className={styles.institution}>
            <h4 className={styles.college}>{education.college}</h4>
            <p className={styles.university}>{education.university}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.section}>
              <h5 className={styles.sectionTitle}>Key Achievements</h5>
              <ul className={styles.list}>
                {education.achievements.map((achievement, index) => (
                  <li key={index} className={styles.listItem}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className={styles.section}>
              <h5 className={styles.sectionTitle}>Key Courses</h5>
              <div className={styles.courses}>
                {education.courses.map((course, index) => (
                  <span key={index} className={styles.course}>{course}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;