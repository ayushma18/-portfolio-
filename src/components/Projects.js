import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaJsSquare, FaHtml5, FaCss3 } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dynamic theming, and optimized performance.",
      technologies: ["React", "CSS Modules", "Framer Motion", "JavaScript"],
      githubLink: "https://github.com/ayushma18/portfolio",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Web Development"
    },
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot using natural language processing to provide customer support and automated responses with machine learning capabilities.",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "AI/ML"
    },
    {
      title: "Task Management App",
      description: "A full-stack task management application with user authentication, real-time updates, and collaborative features for team productivity.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Web Development"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis and visualization using modern charting libraries and real-time data processing.",
      technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Data Science"
    },
    {
      title: "E-commerce Platform",
      description: "Complete e-commerce solution with payment integration, inventory management, and responsive design for optimal user experience.",
      technologies: ["React", "Express.js", "PostgreSQL", "Stripe"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "Web Development"
    },
    {
      title: "Machine Learning Model",
      description: "Predictive model for data analysis using various ML algorithms with comprehensive data preprocessing and model evaluation.",
      technologies: ["Python", "Scikit-learn", "NumPy", "Jupyter"],
      githubLink: "https://github.com/ayushma18",
      liveLink: "#",
      image: "/api/placeholder/400/250",
      category: "AI/ML"
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