import React, { useEffect, useRef } from 'react';
import { useSettings } from '../theme/ThemeProvider';
import styles from './Backdrop.module.css';

/**
 * The page ground. Four switchable surfaces (grain, ruled, grid, flat) plus a
 * slow warm glow that tracks the pointer, so the background is never a flat
 * fill. The glow is a single compositor-friendly transform on one element —
 * it writes two custom properties and never touches layout.
 *
 * Skipped entirely for coarse pointers and when motion is reduced.
 */
const Backdrop = () => {
  const { settings, resolved } = useSettings();
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return undefined;
    if (resolved.motion === 'off') return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;

    const paint = () => {
      frame = 0;
      glow.style.setProperty('--gx', `${x}px`);
      glow.style.setProperty('--gy', `${y}px`);
    };

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      /* Coalesce to one write per frame; pointermove fires far faster. */
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [resolved.motion]);

  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.surface} data-surface={settings.backdrop} />
      <div ref={glowRef} className={styles.glow} />
    </div>
  );
};

export default Backdrop;
