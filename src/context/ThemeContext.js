import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      text: '#2d3436',
      textSecondary: '#636e72',
      accent: '#0984e3',
      accentSecondary: '#74b9ff',
    }
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#1a1a1a',
      secondary: '#2d2d2d',
      text: '#ffffff',
      textSecondary: '#a0a0a0',
      accent: '#74b9ff',
      accentSecondary: '#0984e3',
    }
  },
  nature: {
    name: 'nature',
    colors: {
      primary: '#081c15',
      secondary: '#1b4332',
      text: '#d8f3dc',
      textSecondary: '#95d5b2',
      accent: '#2d6a4f',
      accentSecondary: '#40916c',
    }
  },
  sunset: {
    name: 'sunset',
    colors: {
      primary: '#3d405b',
      secondary: '#4a4e81',
      text: '#f2cc8f',
      textSecondary: '#e07a5f',
      accent: '#f4a261',
      accentSecondary: '#e76f51',
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(themes[savedTheme]);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setCurrentTheme(prefersDark ? themes.dark : themes.light);
    }
  }, []);

  useEffect(() => {
    if (hoveredTheme) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [hoveredTheme]);

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
      localStorage.setItem('theme', themeName);
    }
  };

  const handleThemeHover = (themeName) => {
    if (themes[themeName]) {
      setHoveredTheme(themes[themeName]);
    }
  };

  const handleThemeHoverEnd = () => {
    setHoveredTheme(null);
  };

  const activeTheme = hoveredTheme || currentTheme;

  return (
    <ThemeContext.Provider 
      value={{
        currentTheme: activeTheme,
        setTheme,
        handleThemeHover,
        handleThemeHoverEnd,
        isTransitioning,
        themes
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);