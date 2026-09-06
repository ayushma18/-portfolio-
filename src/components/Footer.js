import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { navLinks, profile, socials } from '../data/profile';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
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

    <p className={styles.copyright}>
      © {new Date().getFullYear()} {profile.name}. Built with React.
    </p>
  </footer>
);

export default Footer;
