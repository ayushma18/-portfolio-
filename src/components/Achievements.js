import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaStar, FaGraduationCap } from 'react-icons/fa';
import styles from './Achievements.module.css';

const Achievements = () => {
  const achievements = [
    {
      type: "award",
      title: "Best Group Project Award",
      organization: "Fire Alarm System",
      date: "2024",
      description: "Recognized for innovative fire alarm system project based on Arduino Uno with advanced sensor integration and alert mechanisms",
      category: "Competition",
      icon: <FaTrophy />
    },
    {
      type: "certification",
      title: "Django Web Development",
      organization: "Code IT",
      date: "2024",
      description: "Comprehensive certification in Django framework for full-stack web development",
      category: "Web Development",
      icon: <FaCertificate />
    },
    {
      type: "award",
      title: "Academic Excellence",
      organization: "Academic Institution",
      date: "2023",
      description: "Recognition for outstanding academic performance and consistent high grades",
      category: "Academic",
      icon: <FaGraduationCap />
    }
  ];

  const categories = [
    { name: "All", color: "primary" },
    { name: "Competition", color: "accent" },
    { name: "Certification", color: "success" },
    { name: "Academic", color: "warning" },
    { name: "Development", color: "info" }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(item => item.category === selectedCategory);

  const getTypeColor = (type) => {
    const colors = {
      'award': '#F59E0B',
      'certification': '#34D399',
      'achievement': '#3B82F6'
    };
    return colors[type] || '#6B7280';
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements & Certifications
        </motion.h2>
        
        <motion.div 
          className={styles.filterButtons}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${styles.filterBtn} ${selectedCategory === category.name ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={selectedCategory}
        >
          {filteredAchievements.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.achievementCard}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className={styles.cardHeader}
                style={{ backgroundColor: getTypeColor(item.type) }}
              >
                <div className={styles.cardIcon}>
                  {item.icon}
                </div>
                <div className={styles.cardType}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <h4 className={styles.cardOrganization}>{item.organization}</h4>
                <p className={styles.cardDescription}>{item.description}</p>
                
                <div className={styles.cardFooter}>
                  <span className={styles.cardDate}>{item.date}</span>
                  <span 
                    className={styles.categoryBadge}
                    style={{ backgroundColor: getTypeColor(item.type) }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.statsSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.statsTitle}>Achievement Summary</h3>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ color: '#F59E0B' }}>
                <FaTrophy />
              </div>
              <div className={styles.statNumber}>2</div>
              <div className={styles.statLabel}>Awards Won</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ color: '#34D399' }}>
                <FaCertificate />
              </div>
              <div className={styles.statNumber}>1</div>
              <div className={styles.statLabel}>Certifications</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ color: '#3B82F6' }}>
                <FaMedal />
              </div>
              <div className={styles.statNumber}>3</div>
              <div className={styles.statLabel}>Total Achievements</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ color: '#8B5CF6' }}>
                <FaStar />
              </div>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Dedication</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;