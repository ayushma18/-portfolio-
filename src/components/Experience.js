import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers, FaTrophy, FaCode, FaLaptopCode, FaHandsHelping } from 'react-icons/fa';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      type: "involvement",
      title: "Hackathon Participant",
      organization: "Multiple Events",
      period: "2023 - Present",
      description: "Active participant in various hackathons and coding competitions. Developed innovative solutions under time constraints and collaborated with diverse teams.",
      skills: ["Problem Solving", "Team Collaboration", "Rapid Prototyping"],
      icon: <FaTrophy />
    },
    {
      type: "involvement",
      title: "Student Volunteer",
      organization: "Pulchowk Campus",
      period: "September 2022 - Present",
      description: "Volunteered in organizing tech events, workshops, and seminars. Helped in coordination and technical support for various college activities.",
      skills: ["Event Management", "Communication", "Technical Support"],
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
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((item, index) => (
            <motion.div 
              key={index} 
              className={`${styles.timelineItem} ${styles[item.type]}`}
              variants={itemVariants}
            >
              <div className={styles.timelineDot}>
                {item.icon}
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.itemTitle}>
                    {item.title}
                    {item.title === "Hackathon Participant" && (
                      <span className={styles.inlineIcon}>{item.icon}</span>
                    )}
                  </h3>
                  <span className={styles.itemPeriod}>{item.period}</span>
                </div>
                
                <h4 className={styles.itemOrganization}>{item.organization}</h4>
                <p className={styles.itemDescription}>{item.description}</p>
                
                <div className={styles.skillTags}>
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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