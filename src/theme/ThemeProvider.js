import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  DEFAULTS,
  STORAGE_KEY,
  applySettings,
  readStored,
  resolveMotion,
  resolveTheme,
} from './settings';

const SettingsContext = createContext(null);

export const useSettings = () => {
  const value = useContext(SettingsContext);
  if (!value) throw new Error('useSettings must be used inside <ThemeProvider>');
  return value;
};

const ThemeProvider = ({ children }) => {
  /* The inline script in index.html has already written these attributes, so
     the first paint is correct; this only takes ownership of them. */
  const [settings, setSettings] = useState(() =>
    typeof window === 'undefined' ? DEFAULTS : readStored()
  );

  const [resolved, setResolved] = useState(() => ({
    theme: typeof window === 'undefined' ? 'light' : resolveTheme(settings.theme),
    motion: typeof window === 'undefined' ? 'full' : resolveMotion(settings.motion),
  }));

  useEffect(() => {
    applySettings(settings);
    setResolved({
      theme: resolveTheme(settings.theme),
      motion: resolveMotion(settings.motion),
    });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      /* Private browsing: the choice simply will not persist. */
    }
  }, [settings]);

  /* While either setting is on "auto", follow the OS if it changes. */
  useEffect(() => {
    const queries = [
      ['theme', window.matchMedia('(prefers-color-scheme: dark)')],
      ['motion', window.matchMedia('(prefers-reduced-motion: reduce)')],
    ];

    const onChange = () => {
      applySettings(settings);
      setResolved({
        theme: resolveTheme(settings.theme),
        motion: resolveMotion(settings.motion),
      });
    };

    queries.forEach(([, query]) => query.addEventListener('change', onChange));
    return () =>
      queries.forEach(([, query]) => query.removeEventListener('change', onChange));
  }, [settings]);

  const set = useCallback(
    (key, value) => setSettings((current) => ({ ...current, [key]: value })),
    []
  );

  const reset = useCallback(() => setSettings({ ...DEFAULTS }), []);

  const value = useMemo(
    () => ({ settings, set, reset, resolved }),
    [settings, set, reset, resolved]
  );

  return (
    <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
  );
};

export default ThemeProvider;
