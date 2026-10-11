import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './ScrollProgress.module.css';

/**
 * A hairline under the masthead showing how far down the document the reader
 * is — the page's own progress bar, in place of a scrollbar they may not see.
 * Purely decorative, so it is hidden from assistive technology.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className={styles.bar} style={{ scaleX }} aria-hidden="true" />;
};

export default ScrollProgress;
