import React, { useMemo } from 'react';
import { MotionConfig } from 'framer-motion';
import ThemeProvider, { useSettings } from '../theme/ThemeProvider';
import useSmoothScroll from '../hooks/useSmoothScroll';
import { projects } from '../data/profile';
import Backdrop from './Backdrop';
import Cursor from './Cursor';
import Nav from './Nav';
import Hero from './Hero';
import Marquee from './Marquee';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Recognition from './Recognition';
import Contact from './Contact';
import Footer from './Footer';

const Shell = () => {
  const { resolved } = useSettings();
  const full = resolved.motion === 'full';

  useSmoothScroll(full);

  /* The ticker is the project stack, deduplicated — real data rather than
     decorative filler. */
  const tools = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.tech))),
    []
  );

  return (
    /**
     * Motion is resolved from the visitor's setting, which itself defaults to
     * the OS preference. Framer animates inline styles from JavaScript, so the
     * `prefers-reduced-motion` block in global.css cannot reach it — this is
     * what actually honours the choice for those animations.
     */
    <MotionConfig reducedMotion={full ? 'never' : 'always'}>
      <Backdrop />
      <Cursor />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Marquee items={tools} label="Tools used across the projects" />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Recognition />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
};

const App = () => (
  <ThemeProvider>
    <Shell />
  </ThemeProvider>
);

export default App;
