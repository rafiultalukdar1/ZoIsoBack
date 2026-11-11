import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi2';

const SHOW_AFTER_PX = 500;

/** Floating circular button (bottom-right) that smoothly scrolls back to the top. */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Terug naar boven"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-[200] flex size-12 items-center justify-center rounded-full bg-primary text-xl text-white shadow-lg shadow-primary/30 ring-4 ring-white/70 duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:bottom-8 sm:right-8 sm:size-14 sm:text-2xl ${
        visible
          ? 'translate-y-0 opacity-100 hover:-translate-y-1'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <HiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
