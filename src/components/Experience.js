import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers, FaTrophy, FaCode, FaLaptopCode, FaHandsHelping } from 'react-icons/fa';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      type: "achievement",
      title: "Selected for Seeds for the Future",
      organization: "Huawei Technologies",
      period: "2025",
      description: "Selected for Huawei's prestigious Seeds for the Future program, recognizing excellence in technology and innovation.",
      skills: ["Technology Innovation", "Leadership", "Global Perspective"],
      icon: null,
      isHuawei: true
    },
    {
      type: "involvement",
      title: "Hackathon Participant",
      organization: "Multiple Events",
      period: "2023 - Present",
      description: "Active participant in various hackathons and coding competitions.",
      skills: ["Problem Solving", "Team Collaboration"],
      icon: <FaTrophy />
    },
    {
      type: "involvement",
      title: "Student Volunteer",
      organization: "Pulchowk Campus",
      period: "Sep 2022 - Present",
      description: "Volunteered in organizing tech events and workshops.",
      skills: ["Event Management", "Communication"],
      icon: <FaHandsHelping />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience & Involvement
        </motion.h2>
        
        <motion.div
          className={styles.experienceRow}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={styles.experienceCard}>
            <div className={styles.iconSection}>
              <div className={styles.huaweiImageContainer}>
                <div className={styles.huaweiPlaceholder}>
                  HUAWEI
                </div>
              </div>
              <div className={styles.experienceIcon}>
                <FaTrophy />
              </div>
              <div className={styles.experienceIcon}>
                <FaHandsHelping />
              </div>
            </div>
            <div className={styles.contentSection}>
              {experiences.map((item, index) => (
                <div key={index} className={styles.experienceItem}>
                  <h3 className={styles.experienceTitle}>{item.title}</h3>
                  <span className={`${styles.experiencePeriod} ${styles[item.type]}`}>{item.period}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.statsSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaBriefcase />
              </div>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaUsers />
              </div>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Team Collaborations</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaTrophy />
              </div>
              <div className={styles.statNumber}>2+</div>
              <div className={styles.statLabel}>Hackathons Participated</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <FaCode />
              </div>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Hours of Coding</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;