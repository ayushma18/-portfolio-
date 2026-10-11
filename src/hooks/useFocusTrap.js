import { useEffect } from 'react';

/* Elements that can hold keyboard focus. Anything explicitly removed from the
   tab order (tabindex="-1") is excluded. */
const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/* getClientRects() is empty for anything display:none or otherwise unrendered,
   which is how the desktop nav links stay out of the mobile menu's trap. It is
   used in preference to offsetParent, which is null for position:fixed nodes. */
const focusableWithin = (root) =>
  root
    ? Array.from(root.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.getClientRects().length > 0
      )
    : [];

/**
 * Confines keyboard focus to `containerRef` while `isOpen`.
 *
 * Tab and Shift+Tab cycle within the container instead of falling through to
 * the page behind it, Escape calls `onClose`, and background scrolling is
 * locked. On open, focus moves to the first focusable element inside
 * `initialFocusRef` when given, otherwise inside the container itself.
 *
 * Restoring focus to whatever opened the region stays with the caller — only
 * it knows what the trigger was.
 */
const useFocusTrap = ({ isOpen, containerRef, initialFocusRef, onClose }) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusableWithin(containerRef.current);
      if (items.length === 0) {
        /* Nothing to move to — hold focus rather than release it. */
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const inside = containerRef.current?.contains(active);

      if (event.shiftKey && (active === first || !inside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !inside)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const target = initialFocusRef?.current ?? containerRef.current;
    focusableWithin(target)[0]?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, containerRef, initialFocusRef, onClose]);
};

export default useFocusTrap;
