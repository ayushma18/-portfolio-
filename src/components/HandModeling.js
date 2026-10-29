import React, { useCallback, useRef, useState } from 'react';
import { FaArrowRight, FaTiktok, FaTimes } from 'react-icons/fa';
import { handModeling } from '../data/profile';
import useFocusTrap from '../hooks/useFocusTrap';
import Section from './Section';
import styles from './HandModeling.module.css';

const HandModeling = () => {
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  const close = useCallback(() => {
    setActive(null);
    openerRef.current?.focus();
  }, []);

  /* Same focus discipline as the certificate viewer: focus is trapped in the
     dialog while it is open, which is what makes aria-modal truthful. */
  useFocusTrap({
    isOpen: Boolean(active),
    containerRef: dialogRef,
    onClose: close,
  });

  return (
    <Section
      id="hand-modeling"
      index="05"
      eyebrow="Hand modeling"
      title="On the other hand"
      lead={handModeling.intro}
    >
      <a
        href={handModeling.featured.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.featured}
        data-cursor-label="TikTok"
      >
        <FaTiktok aria-hidden="true" />
        <span className={styles.featuredLabel}>{handModeling.featured.label}</span>
        <span className={styles.featuredHandle}>{handModeling.featured.handle}</span>
        <FaArrowRight aria-hidden="true" className={styles.featuredArrow} />
      </a>

      <ul className={styles.grid}>
        {handModeling.shots.map((shot, i) => (
          <li key={shot.src} className={styles.cell}>
            <button
              type="button"
              className={styles.tile}
              onClick={(event) => {
                openerRef.current = event.currentTarget;
                setActive(shot);
              }}
              aria-label={`View larger: ${shot.caption}`}
              data-cursor-label="View"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className={styles.image}
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              <span className={styles.caption}>
                <span className={styles.captionNum} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {shot.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          ref={dialogRef}
          className={styles.overlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <div
            className={styles.dialog}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={close}
              aria-label="Close image viewer"
            >
              <FaTimes />
            </button>
            <img src={active.src} alt={active.alt} className={styles.dialogImage} />
            <p className={styles.dialogCaption}>{active.caption}</p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default HandModeling;
