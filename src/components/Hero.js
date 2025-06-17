import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';
import ayushmaImage from '../images/ayushma.png';

const TypewriterText = ({ text }) => {
  const characters = text.split('');
  
  return (
    <div style={{ display: 'inline-block' }}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const AnimatedButton = ({ className, href, onClick, children }) => {
  return (
    <motion.a
      href={href}
      className={className}
      onClick={onClick}
      whileHover={{
        y: -2,
        transition: { duration: 0.2, ease: "easeInOut" }
      }}
      whileTap={{
        y: 0,
        scale: 0.98,
        transition: { duration: 0.1, ease: "easeInOut" }
      }}
      initial={false}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.content}>
          <motion.div className={styles.title} variants={itemVariants}>
            <motion.span
              className={styles.greeting}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello,
            </motion.span>
            <motion.h1
              className={styles.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>I'm </span>
              <strong>Ayushma Pudasaini</strong>
            </motion.h1>
            <motion.div
              className={styles.role}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Computer Engineer
            </motion.div>
            <motion.div
              className={styles.location}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              From Nepal
            </motion.div>
          </motion.div>
          <motion.p
            className={styles.subtitle}
            variants={itemVariants}
          >
            Passionate about Web Development and Machine Learning
          </motion.p>
          <motion.div
            className={styles.cta}
            variants={itemVariants}
          >
            <AnimatedButton
              href="#contact"
              className={styles.primaryBtn}
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Get in Touch
            </AnimatedButton>
            <AnimatedButton
              href="#about"
              className={styles.secondaryBtn}
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              Learn More
            </AnimatedButton>
          </motion.div>
        </div>
        <motion.div
          className={styles.photoContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className={styles.imageWrapper}>
            <img
              src={ayushmaImage}
              alt="Ayushma's Photo"
              className={styles.heroImage}
            />
            <div className={styles.imageDecoration}></div>
          </div>
        </motion.div>
      </motion.div>
      <div className={styles.shapes}>
        <motion.div
          className={styles.shape1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={styles.shape2}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={styles.shape3}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;