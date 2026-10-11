import React, { useEffect, useRef, useState } from 'react';
import { useSettings } from '../theme/ThemeProvider';
import styles from './Cursor.module.css';

/* Anything that should make the cursor react. Elements can also opt in with
   data-cursor-label to have the cursor announce what a click will do. */
const INTERACTIVE = 'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])';

/**
 * A drawn pointer, in two parts: a dot that tracks the mouse exactly, and a
 * ring that trails it with easing. Over anything interactive the ring opens up
 * and picks up a label from the nearest [data-cursor-label].
 *
 * Position is written straight to the DOM inside a rAF loop rather than held in
 * state — re-rendering React on every mousemove would be the wrong tool.
 * The native cursor is only hidden once this has mounted, so a failure here
 * leaves the visitor with a working system cursor rather than none.
 */
const Cursor = () => {
  const { settings, resolved } = useSettings();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  const active = settings.cursor !== 'off' && resolved.motion !== 'off';

  useEffect(() => {
    if (!active) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return undefined;

    setEnabled(true);
    document.documentElement.classList.add(styles.hideNative);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame;

    const tick = () => {
      /* Critically-damped-ish follow: fast enough to feel attached, slow
         enough to read as a separate object. */
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const onOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const hit = target.closest(INTERACTIVE);
      const labelled = target.closest('[data-cursor-label]');
      ring.dataset.state = hit ? 'active' : 'idle';
      if (label) {
        const text = labelled?.getAttribute('data-cursor-label') ?? '';
        label.textContent = text;
        ring.dataset.labelled = text ? 'true' : 'false';
      }
    };

    const onLeave = () => { ring.dataset.hidden = 'true'; dot.dataset.hidden = 'true'; };
    const onEnter = () => { ring.dataset.hidden = 'false'; dot.dataset.hidden = 'false'; };
    const onDown = () => { ring.dataset.pressed = 'true'; };
    const onUp = () => { ring.dataset.pressed = 'false'; };

    frame = requestAnimationFrame(tick);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerenter', onEnter);
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerenter', onEnter);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.classList.remove(styles.hideNative);
      setEnabled(false);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className={styles.cursor} aria-hidden="true" data-enabled={enabled}>
      <span ref={dotRef} className={styles.dot} />
      <span ref={ringRef} className={styles.ring} data-shape={settings.cursor}>
        <span className={styles.crosshair} />
        <span ref={labelRef} className={styles.label} />
      </span>
    </div>
  );
};

export default Cursor;
