import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lenis smooth scrolling, switched by the motion setting.
 *
 * Lenis drives the scroll position itself, so the CSS `scroll-behavior: smooth`
 * that handles anchors natively has to be turned off while it runs — otherwise
 * the two fight and jump. In-page anchors are handed to Lenis instead, offset
 * by the sticky masthead.
 */
const useSmoothScroll = (enabled) => {
  useEffect(() => {
    if (!enabled) return undefined;
    if (typeof window === 'undefined') return undefined;

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    const lenis = new Lenis({
      duration: 1.05,
      /* Slightly overdamped exponential: settles without a bounce, which suits
         a page built out of straight rules. */
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const navOffset = () => {
      const value = getComputedStyle(root).getPropertyValue('--nav-height');
      return -(parseInt(value, 10) || 64) - 16;
    };

    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target instanceof Element
        ? event.target.closest('a[href^="#"]')
        : null;
      if (!link) return;

      const id = link.getAttribute('href');
      if (!id || id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: navOffset() });
      /* Keep the URL and the focus position honest for keyboard users. */
      window.history.pushState(null, '', id);
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      root.style.scrollBehavior = previousBehavior;
    };
  }, [enabled]);
};

export default useSmoothScroll;
