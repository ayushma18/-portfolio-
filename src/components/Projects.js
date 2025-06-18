import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaJsSquare, FaHtml5, FaCss3 } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Maze Solver",
      description: "An intelligent maze solving application using various algorithms like A*, BFS, and DFS. Features visualization of pathfinding algorithms and interactive maze generation.",
      technologies: ["React", "JavaScript", "Algorithms", "CSS"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Web Development"
    },
    {
      title: "Employee Management System",
      description: "A comprehensive employee management system with features for attendance tracking, payroll management, and employee records with user authentication and role-based access.",
      technologies: ["C++", "File Handling", "OOP", "Data Structures"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Desktop Application"
    },
    {
      title: "Cooperative Website",
      description: "A collaborative platform designed to facilitate community cooperation, resource sharing, and collective decision-making with modern web technologies.",
      technologies: ["React", "Django", "Python", "JavaScript"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Web Development"
    },
    {
      title: "Book Publication",
      description: "Published research work or technical book contributing to academic or professional knowledge sharing in the field of technology and development.",
      technologies: ["React", "Django", "Python", "Publishing"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Publication"
    },
    {
      title: "Online Quiz System",
      description: "A comprehensive online quiz platform with user authentication, real-time scoring, question management, and detailed analytics for educational assessments.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Web Development"
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
                <div className={styles.imagePlaceholder}>
                  <span className={styles.categoryBadge}>{project.category}</span>
                </div>
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label="View Live Demo"
                    >
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
          <a 
            href="https://github.com/ayushma18" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <FaGithub />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;