import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projectCategories, projects, socials } from '../data/profile';
import Section from './Section';
import styles from './Projects.module.css';

/** Two-letter monogram used on the generated cover art. */
const monogram = (title) =>
  title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Projects"
      lead="Selected work, each linked to its source. Descriptions reflect what the code actually does."
    >
      <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={filter === category}
            className={`${styles.filterBtn} ${
              filter === category ? styles.filterActive : ''
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className={styles.grid} layout>
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              className={styles.card}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={styles.cover}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`,
                }}
                aria-hidden="true"
              >
                <span className={styles.coverMark}>{monogram(project.title)}</span>
                <span className={styles.coverCategory}>{project.category}</span>
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.year}>{project.year}</span>
                  {project.status && (
                    <span className={styles.status}>{project.status}</span>
                  )}
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
                <p className={styles.description}>{project.description}</p>

                <ul className={styles.tech}>
                  {project.tech.map((tech) => (
                    <li key={tech} className={styles.techTag}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoLink}
                >
                  <FaGithub aria-hidden="true" />
                  <span>
                    View source
                    <span className={styles.srOnly}> for {project.title}</span>
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className={styles.footer}>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.allLink}
        >
          <FaGithub aria-hidden="true" />
          Browse every repository on GitHub
        </a>
      </div>
    </Section>
  );
};

export default Projects;
