import { useEffect, useRef } from 'react';

/**
 * Pulls an element a little way toward the pointer while it is hovered, then
 * releases it. Applied to the one primary call to action — used on everything
 * it becomes noise.
 *
 * Returns a ref to attach. Does nothing on coarse pointers or when `enabled`
 * is false, and always restores the element's own transform on cleanup.
 */
const useMagnetic = (enabled, strength = 0.28) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    let frame = 0;
    let tx = 0;
    let ty = 0;

    const paint = () => {
      frame = 0;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    const onMove = (event) => {
      const box = el.getBoundingClientRect();
      tx = (event.clientX - (box.left + box.width / 2)) * strength;
      ty = (event.clientY - (box.top + box.height / 2)) * strength;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
      el.style.transform = '';
    };
  }, [enabled, strength]);

  return ref;
};

export default useMagnetic;
