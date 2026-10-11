import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile, socials, stats } from '../data/profile';
import { useSettings } from '../theme/ThemeProvider';
import useMagnetic from '../hooks/useMagnetic';
import portrait from '../images/ayushma-portrait.webp';
import styles from './Hero.module.css';

/* The name is set as separate lines so each can be revealed from behind its
   own edge — a typographic gesture rather than another fade-up. */
const nameLines = profile.name.split(' ');

/* The whole intro is animated in CSS rather than JavaScript. It is the only
   content above the fold, so its final state has to be guaranteed by the
   stylesheet: `animation-fill-mode: both` leaves every element visible even if
   scripting never runs, and the reduced-motion rule in global.css collapses
   the timing to nothing. `--d` is the element's position in the stagger. */
const step = (d) => ({ '--d': d });

const Hero = () => {
  const { resolved } = useSettings();
  const full = resolved.motion === 'full';
  const sectionRef = useRef(null);

  /* The portrait drifts against the text as the page moves — one plane of
     parallax, not five. Framer clamps this to nothing when motion is reduced. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const magneticRef = useMagnetic(full);

  return (
    <section id="home" className={styles.hero} ref={sectionRef}>
      <div className={styles.container}>
      {/* Masthead: the status line a reader checks first, and where she is. */}
      <div className={`${styles.masthead} ${styles.reveal}`} style={step(0)}>
        <p className={styles.status}>
          <span className={styles.pulse} aria-hidden="true" />
          {profile.availability}
        </p>
        <p className={styles.place}>{profile.location}</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.headline}>
          <h1 className={styles.name}>
            {nameLines.map((line, i) => (
              <span key={line} className={styles.nameLine}>
                <span className={styles.nameInner} style={step(i)}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className={`${styles.role} ${styles.reveal}`} style={step(1)}>
            {profile.role}
          </p>

          <p className={`${styles.tagline} ${styles.reveal}`} style={step(2)}>
            {profile.tagline}
          </p>

          <div className={`${styles.actions} ${styles.reveal}`} style={step(3)}>
            <a
              ref={magneticRef}
              href="#projects"
              className={styles.primary}
              data-cursor-label="Scroll"
            >
              See the work
              <FaArrowRight aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={styles.secondary}
              data-cursor-label="Write"
            >
              Email me
            </a>

            <span className={styles.socials}>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>

        {/* The portrait sits in an offset rule frame — a print device, not a
            drop shadow. */}
        <motion.figure
          className={`${styles.portraitWrap} ${styles.reveal}`}
          style={{ ...step(2), y: portraitY }}
        >
          <span className={styles.frame} aria-hidden="true" />
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            className={styles.portrait}
            width="900"
            height="1117"
          />
        </motion.figure>
      </div>

      {/* Specification strip — the three facts worth reading at a glance. */}
      <dl className={`${styles.spec} ${styles.reveal}`} style={step(4)}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.specItem}>
            <dt className={styles.specLabel}>{stat.label}</dt>
            <dd className={styles.specValue}>{stat.value}</dd>
          </div>
        ))}
      </dl>
      </div>
    </section>
  );
};

export default Hero;
