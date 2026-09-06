import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAward, FaCertificate, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { recognition } from '../data/profile';
import Section from './Section';
import styles from './Recognition.module.css';

const Recognition = () => {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  const close = useCallback(() => {
    setActive(null);
    openerRef.current?.focus();
  }, []);

  /* While the viewer is open: trap focus on the close button, close on
     Escape, and stop the page behind it from scrolling. */
  useEffect(() => {
    if (!active) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close]);

  return (
    <Section
      id="recognition"
      eyebrow="Recognition"
      title="Awards & certificates"
    >
      <div className={styles.grid}>
        {recognition.map((entry, index) => (
          <motion.article
            key={entry.title}
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <span
              className={`${styles.badge} ${
                entry.kind === 'Award' ? styles.award : styles.certificate
              }`}
            >
              {entry.kind === 'Award' ? <FaAward /> : <FaCertificate />}
              {entry.kind}
            </span>

            <h3 className={styles.cardTitle}>{entry.title}</h3>
            <p className={styles.org}>
              {entry.organization} · {entry.year}
            </p>
            <p className={styles.description}>{entry.description}</p>

            {entry.document && (
              <button
                type="button"
                className={styles.viewBtn}
                onClick={(event) => {
                  openerRef.current = event.currentTarget;
                  setActive(entry);
                }}
              >
                <FaExternalLinkAlt aria-hidden="true" />
                View certificate
              </button>
            )}
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} certificate`}
          >
            <motion.div
              className={styles.dialog}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
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
                  ref={closeRef}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Recognition;
