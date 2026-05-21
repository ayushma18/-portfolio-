import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaJsSquare, FaHtml5, FaCss3 } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Acoustic Side-Channel Attack",
      description: "CNN-based deep learning pipeline to classify keyboard keystrokes from acoustic emissions. Achieved 82.50% accuracy on unseen environments using mel spectrograms, Grad-CAM interpretability, and Optuna hyperparameter optimization.",
      technologies: ["PyTorch", "CNN", "Python", "Grad-CAM", "Optuna"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=250&fit=crop",
      category: "Deep Learning Research"
    },
    {
      title: "Sign Language Generator",
      description: "Full-stack system combining React frontend, FastAPI ML backend for gesture prediction, and Django API for audio generation. Produces sign-language videos from text or audio with bilingual support (English/Nepali).",
      technologies: ["React", "FastAPI", "Django", "Python"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=250&fit=crop",
      category: "Web Development"
    },
    {
      title: "Maze Solver",
      description: "An intelligent maze solving application using various algorithms like A*, BFS, and DFS. Features visualization of pathfinding algorithms and interactive maze generation.",
      technologies: ["React", "JavaScript", "Algorithms", "CSS"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=250&fit=crop",
      category: "Web Development"
    },
    {
      title: "Employee Management System",
      description: "A comprehensive employee management system with features for attendance tracking, payroll management, and employee records with user authentication and role-based access.",
      technologies: ["C++", "File Handling", "OOP", "Data Structures"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      category: "Desktop Application"
    },
    {
      title: "Cooperative Website",
      description: "Member management and savings tracking platform with React frontend and Django REST backend. Includes full CRUD operations and user authentication.",
      technologies: ["React", "Django", "Python", "JavaScript"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
      category: "Web Development"
    },
    {
      title: "Book Publication",
      description: "Modern responsive UI platform for browsing and categorizing published books with clean navigation and filtering.",
      technologies: ["React", "Django", "Python"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      category: "Web Development"
    },
    {
      title: "Online Quiz System",
      description: "Complete quiz platform with countdown timer, category filtering, admin panel, and automated scoring for educational assessments.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=250&fit=crop&q=80",
      category: "Web Development"
    },
    {
      title: "Fire & Smoke Detection",
      description: "Embedded alarm system for real-time fire and smoke detection using Arduino Uno with sensor fusion. Awarded Best Project at Pulchowk Campus.",
      technologies: ["Arduino", "C++", "Embedded", "IoT"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=250&fit=crop",
      category: "Embedded Systems"
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      'React': <FaReact />,
      'Python': <FaPython />,
      'JavaScript': <FaJsSquare />,
      'HTML': <FaHtml5 />,
      'CSS': <FaCss3 />
    };
    return icons[tech] || null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = 'linear-gradient(135deg, #3b5bdb 0%, #9c36b5 100%)';
                  }}
                />
                <span className={styles.categoryBadge}>{project.category}</span>
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.ctaTitle}>Want to see more?</h3>
          <p className={styles.ctaText}>Check out my GitHub for more projects and contributions</p>
          <a href="https://github.com/ayushma18" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            <FaGithub />
            View All Projects
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;