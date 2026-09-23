import { useEffect } from 'react';

/**
 * useReveal — Attaches an IntersectionObserver to all .reveal* elements.
 * Adds class "visible" when each enters the viewport (fires once per element).
 *
 * @param {string}  selector  CSS selector to observe (default covers all variants)
 * @param {*}       depKey    Any value whose change resets + reruns the observer
 *                            (pass currentPage so page changes re-trigger animations)
 */
export default function useReveal(
  selector = '.reveal, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale',
  depKey = null
) {
  useEffect(() => {
    let observer;

    const init = () => {
      // Remove stale visible classes from previous page
      document.querySelectorAll(`${selector}.visible`).forEach(el => {
        el.classList.remove('visible');
      });

      const options = { threshold: 0.1, rootMargin: '0px 0px -30px 0px' };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      document.querySelectorAll(selector).forEach(el => observer.observe(el));
    };

    // Use requestAnimationFrame so DOM is fully painted before we observe
    const rafId = requestAnimationFrame(() => {
      const timer = setTimeout(init, 60);
      return () => clearTimeout(timer);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [depKey]);
}
