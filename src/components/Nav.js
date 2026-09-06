import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, profile, socials } from '../data/profile';
import ThemeToggle from './ThemeToggle';
import styles from './Nav.module.css';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Highlight the section currently in view. */
  useEffect(() => {
    const ids = ['home', ...navLinks.map((link) => link.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* Escape closes the mobile menu; lock scrolling while it is open. */
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen, closeMenu]);

  const renderLink = (link, onClick) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={onClick}
      className={activeId === link.id ? styles.active : undefined}
      aria-current={activeId === link.id ? 'true' : undefined}
    >
      {link.label}
    </a>
  );

  return (
    <header className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo}>
        <span className={styles.logoMark} aria-hidden="true">
          AP
        </span>
        <span className={styles.logoText}>{profile.name}</span>
      </a>

      <nav className={styles.links} aria-label="Primary">
        {navLinks.map((link) => renderLink(link))}
      </nav>

      <div className={styles.actions}>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className={styles.iconLink}
        >
          <FaGithub />
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className={styles.iconLink}
        >
          <FaLinkedin />
        </a>
        <ThemeToggle />
        <button
          ref={toggleRef}
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className={styles.mobileMenu}
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => renderLink(link, closeMenu))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
