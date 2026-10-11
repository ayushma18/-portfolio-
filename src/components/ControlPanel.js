import React, { useCallback, useRef, useState } from 'react';
import { ACCENTS, SETTINGS } from '../theme/settings';
import { useSettings } from '../theme/ThemeProvider';
import useFocusTrap from '../hooks/useFocusTrap';
import styles from './ControlPanel.module.css';

/**
 * The visitor's control over how the site looks: theme, accent, page ground,
 * pointer and motion. Every choice is stored, so the site reopens the way they
 * left it.
 *
 * Presented as a colophon rather than a settings dialog — this is a printed
 * page, and these are its production notes.
 */
const ControlPanel = () => {
  const { settings, set, reset } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  useFocusTrap({ isOpen, containerRef: panelRef, onClose: close });

  return (
    <div className={styles.wrap}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-controls="control-panel"
        onClick={() => setIsOpen((open) => !open)}
        data-cursor-label={isOpen ? 'Close' : 'Adjust'}
      >
        <span className={styles.triggerSwatch} aria-hidden="true" />
        <span className={styles.triggerText}>Adjust</span>
      </button>

      {/* The entrance is CSS, not a JavaScript animation: a panel that only
          becomes visible once a motion library has run is a panel that can
          fail to appear at all. */}
      {isOpen && (
        <div
          ref={panelRef}
          id="control-panel"
          className={styles.panel}
          role="group"
          aria-label="Appearance settings"
        >
            <p className={styles.title}>Colophon</p>

            {Object.entries(SETTINGS).map(([key, { label, options }]) => (
              <fieldset key={key} className={styles.field}>
                <legend className={styles.legend}>{label}</legend>
                <div className={styles.options}>
                  {Object.entries(options).map(([value, option]) => {
                    const isAccent = key === 'accent';
                    const text = isAccent ? option.label : option;
                    const selected = settings[key] === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        className={`${styles.option} ${selected ? styles.selected : ''}`}
                        aria-pressed={selected}
                        onClick={() => set(key, value)}
                      >
                        {isAccent && (
                          <span
                            className={styles.swatch}
                            style={{ background: ACCENTS[value].swatch }}
                            aria-hidden="true"
                          />
                        )}
                        {text}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}

          <button type="button" className={styles.reset} onClick={reset}>
            Reset to defaults
          </button>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
