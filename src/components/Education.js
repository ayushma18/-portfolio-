import React from 'react';
import styles from './Education.module.css';
import tuLogo from '../images/TU_logo.png';
import unitedAcademyLogo from '../images/united_academy_logo.png';

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        
        {/* University Education */}
        <div className={styles.educationCard}>
          <div className={styles.logoContainer}>
            <a
              href="https://ioe.tu.edu.np/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <img src={tuLogo} alt="Tribhuvan University Logo" className={styles.logo} />
            </a>
          </div>
          <div className={styles.detailsContainer}>
            <h3 className={styles.degree}>Bachelor in Engineering - Computer Engineering</h3>
            <a
              href="https://ioe.tu.edu.np/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.campusLink}
            >
              <p className={styles.campus}>Pulchowk Campus IOE (2023-2027)</p>
            </a>
          </div>
        </div>

        {/* High School Education */}
        <div className={styles.educationCard}>
          <div className={styles.logoContainer}>
            <a
              href="https://academy.united.edu.np/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <img src={unitedAcademyLogo} alt="United Academy Logo" className={styles.logo} />
            </a>
          </div>
          <div className={styles.detailsContainer}>
            <a
              href="https://academy.united.edu.np/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textLink}
            >
              <h3 className={styles.degree}>High School (Science)</h3>
              <p className={styles.campus}>United Academy</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;