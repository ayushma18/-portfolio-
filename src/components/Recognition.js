import React, { useCallback, useRef, useState } from 'react';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { recognition } from '../data/profile';
import useFocusTrap from '../hooks/useFocusTrap';
import Section from './Section';
import styles from './Recognition.module.css';

const Recognition = () => {
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  const close = useCallback(() => {
    setActive(null);
    openerRef.current?.focus();
  }, []);

  /* Focus is confined to the dialog while it is open, which is what makes the
     aria-modal="true" below truthful. Focus lands on the close button, the
     first focusable element inside it. */
  useFocusTrap({
    isOpen: Boolean(active),
    containerRef: dialogRef,
    onClose: close,
  });

  return (
    <Section
      id="recognition"
      index="08"
      eyebrow="Recognition"
      title="Awards & certificates"
    >
      <div className={styles.list}>
        {recognition.map((entry) => (
          <article key={entry.title} className={styles.entry}>
            <p className={styles.meta}>
              <span className={styles.kind}>{entry.kind}</span>
              <span className={styles.year}>{entry.year}</span>
            </p>

            <div className={styles.body}>
              <h3 className={styles.title}>{entry.title}</h3>
              <p className={styles.org}>{entry.organization}</p>
              <p className={styles.description}>{entry.description}</p>

              {entry.document && (
                <button
                  type="button"
                  className={styles.view}
                  onClick={(event) => {
                    openerRef.current = event.currentTarget;
                    setActive(entry);
                  }}
                >
                  View certificate
                  <FaExternalLinkAlt aria-hidden="true" />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          ref={dialogRef}
          className={styles.overlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} certificate`}
        >
          <div
            className={styles.dialog}
            onClick={(event) => event.stopPropagation()}
          >
              <header className={styles.dialogHeader}>
                <div>
                  <h3 className={styles.dialogTitle}>{active.title}</h3>
                  <p className={styles.dialogMeta}>
                    {active.organization} · {active.year}
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={close}
                  aria-label="Close certificate viewer"
                >
                  <FaTimes />
                </button>
              </header>

              <object
                data={active.document}
                type="application/pdf"
                className={styles.viewer}
                aria-label={`${active.title} certificate document`}
              >
                {/* Mobile browsers generally cannot inline a PDF. */}
                <p className={styles.fallback}>
                  This browser cannot display the PDF inline.{' '}
                  <a href={active.document} target="_blank" rel="noopener noreferrer">
                    Open the certificate in a new tab
                  </a>
                  .
                </p>
            </object>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Recognition;
