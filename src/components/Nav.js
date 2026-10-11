import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { navLinks, profile, socials } from '../data/profile';
import useFocusTrap from '../hooks/useFocusTrap';
import ControlPanel from './ControlPanel';
import ScrollProgress from './ScrollProgress';
import styles from './Nav.module.css';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const toggleRef = useRef(null);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

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

  /* The trap covers the whole header, not just the open panel, so the close
     button and the theme toggle beside it stay reachable by keyboard. The
     desktop links are display:none at this breakpoint and drop out on their
     own. Focus lands on the first menu link. */
  useFocusTrap({
    isOpen: isMenuOpen,
    containerRef: headerRef,
    initialFocusRef: menuRef,
    onClose: closeMenu,
  });

  const renderLink = (link, index, onClick) => {
    const isActive = activeId === link.id;
    return (
      <a
        key={link.id}
        href={`#${link.id}`}
        onClick={onClick}
        className={isActive ? styles.active : undefined}
        aria-current={isActive ? 'true' : undefined}
      >
        <span className={styles.linkNum} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        {link.label}
      </a>
    );
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
    >
      <ScrollProgress />

      <a href="#home" className={styles.logo} data-cursor-label="Top">
        {profile.name}
      </a>

      <nav className={styles.links} aria-label="Primary">
        {navLinks.map((link, i) => renderLink(link, i))}
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
        <ControlPanel />
        <button
          ref={toggleRef}
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          data-cursor-label={isMenuOpen ? 'Close' : 'Menu'}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMenuOpen && (
        <nav ref={menuRef} id="mobile-menu" className={styles.mobileMenu} aria-label="Mobile">
          {navLinks.map((link, i) => renderLink(link, i, closeMenu))}
        </nav>
      )}
    </header>
  );
};

export default Nav;
