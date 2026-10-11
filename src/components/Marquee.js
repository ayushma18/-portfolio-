import React from 'react';
import styles from './Marquee.module.css';

/**
 * A running strip of the tools behind the work — the one piece of continuous
 * motion on the page, borrowed from a newspaper ticker.
 *
 * The list is rendered twice: the track scrolls exactly one copy's width, so
 * the second copy is already in place when it loops. The duplicate is hidden
 * from assistive technology; the marquee stops on hover and focus, and the
 * motion setting stops it altogether.
 */
const Marquee = ({ items, label }) => {
  const run = (hidden) => (
    <ul className={styles.run} aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <span className={styles.mark} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.marquee} aria-label={label} role="group">
      <div className={styles.track}>
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
};

export default Marquee;
