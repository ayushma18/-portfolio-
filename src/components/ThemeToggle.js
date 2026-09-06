import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './Nav.module.css';

const getInitialTheme = () =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

/**
 * Flips `data-theme` on <html>, which is all the token layer in
 * styles/global.css needs. The initial value is set by an inline script in
 * index.html so there is no flash of the wrong theme before React mounts.
 */
const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className={styles.iconLink}
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
