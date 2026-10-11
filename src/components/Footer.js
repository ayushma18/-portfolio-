import React from 'react';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { navLinks, profile, socials } from '../data/profile';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {/* Closing call to action. The email is set as the largest thing on the
          page after the name — it is the one action worth taking. */}
      <div className={styles.cta}>
        <p className={styles.ctaLabel}>Next</p>
        <h2 className={styles.ctaHeading}>Let&apos;s build something.</h2>
        <a
          href={`mailto:${profile.email}`}
          className={styles.ctaLink}
          data-cursor-label="Write"
        >
          <span>{profile.email}</span>
          <FaArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className={styles.meta}>
        <div className={styles.brand}>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.role}</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.socials}>
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
        </div>
      </div>

      <p className={styles.colophon}>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Set in Fraunces &amp; IBM Plex</span>
      </p>
    </div>
  </footer>
);

export default Footer;
