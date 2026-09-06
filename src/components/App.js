import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Recognition from './Recognition';
import Contact from './Contact';
import Footer from './Footer';

const App = () => (
  <>
    <a href="#main" className="skipLink">
      Skip to content
    </a>
    <Nav />
    <main id="main">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Recognition />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
