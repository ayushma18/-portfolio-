import React, { useMemo, useState } from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { projectCategories, projects, socials } from '../data/profile';
import Section from './Section';
import styles from './Projects.module.css';

/** Catalogue number — the project's position in the full list, so an entry
 *  keeps the same number no matter which filter is applied. */
const catalogueNumber = (project) =>
  String(projects.indexOf(project) + 1).padStart(2, '0');

/** The entry to leave open for a given selection: the strongest one flagged
 *  `featured`, falling back to the first in the list. */
const leadEntry = (pool) => pool.find((project) => project.featured) ?? pool[0];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [openTitle, setOpenTitle] = useState(leadEntry(projects).title);

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  const selectFilter = (category) => {
    setFilter(category);
    /* Open the lead entry of the new selection rather than leaving the list
       fully collapsed, which reads as empty. */
    const pool =
      category === 'All'
        ? projects
        : projects.filter((project) => project.category === category);
    const next = leadEntry(pool);
    setOpenTitle(next ? next.title : null);
  };

  return (
    <Section
      id="projects"
      index="01"
      eyebrow="Work"
      title="Selected projects"
      lead="Builds across machine learning, full-stack and systems — each linked to its source. Open an entry to read what it does and what it took."
    >
      <div className={styles.filters}>
        <span className={styles.filterLabel} id="filter-label">
          Filter
        </span>
        <div className={styles.filterList} role="group" aria-labelledby="filter-label">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              className={`${styles.filterBtn} ${
                filter === category ? styles.filterActive : ''
              }`}
              onClick={() => selectFilter(category)}
            >
              {category}
              <span className={styles.filterCount}>
                {category === 'All'
                  ? projects.length
                  : projects.filter((p) => p.category === category).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <ol className={styles.index}>
        {visible.map((project) => {
          const isOpen = openTitle === project.title;
          const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

          return (
            <li key={project.title} className={styles.row}>
              <h3 className={styles.rowHeading}>
                <button
                  type="button"
                  id={`entry-${slug}`}
                  className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${slug}`}
                  onClick={() => setOpenTitle(isOpen ? null : project.title)}
                  data-cursor-label={isOpen ? 'Close' : 'Read'}
                >
                  <span className={styles.num} aria-hidden="true">
                    {catalogueNumber(project)}
                  </span>

                  <span className={styles.rowMain}>
                    <span className={styles.rowTitle}>{project.title}</span>
                    <span className={styles.rowSubtitle}>{project.subtitle}</span>
                  </span>

                  <span className={styles.rowMeta}>
                    {project.status && (
                      <span className={styles.status}>{project.status}</span>
                    )}
                    <span className={styles.year}>{project.year}</span>
                  </span>

                  <span className={styles.toggle} aria-hidden="true">
                    <span className={styles.toggleBar} />
                    <span className={`${styles.toggleBar} ${styles.toggleBarV}`} />
                  </span>
                </button>
              </h3>

              {/* Height is animated with grid-template-rows rather than a
                  measured JavaScript height: it needs no library, and a browser
                  that cannot animate it simply snaps open. The panel stays
                  mounted so the transition has something to animate, and is
                  taken out of the accessibility tree by visibility when shut. */}
              <div
                id={`panel-${slug}`}
                role="region"
                aria-labelledby={`entry-${slug}`}
                className={styles.panel}
                data-open={isOpen}
              >
                <div className={styles.panelInner}>
                      <div className={styles.panelBody}>
                        <p className={styles.description}>{project.description}</p>

                        {project.impact && (
                          <p className={styles.impact}>
                            <span className={styles.impactLabel}>Result</span>
                            <span className={styles.impactText}>{project.impact}</span>
                          </p>
                        )}
                      </div>

                      <div className={styles.panelSide}>
                        <p className={styles.sideLabel}>Built with</p>
                        <ul className={styles.tech}>
                          {project.tech.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>

                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.repo}
                          data-cursor-label="GitHub"
                        >
                          <FaGithub aria-hidden="true" />
                          Source
                          <span className="sr-only"> for {project.title}</span>
                          <FaArrowRight aria-hidden="true" className={styles.repoArrow} />
                        </a>
                    </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.allLink}
        data-cursor-label="GitHub"
      >
        <FaGithub aria-hidden="true" />
        Every repository on GitHub
        <FaArrowRight aria-hidden="true" className={styles.repoArrow} />
      </a>
    </Section>
  );
};

export default Projects;
