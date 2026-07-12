document.documentElement.classList.add('motion-ready');

document.addEventListener('DOMContentLoaded', () => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Reveal System
  if (!reduce) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || '0';
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // 2. Scroll Progress Line
  const progressBar = document.getElementById('pbrProgress');
  const header = document.getElementById('pbrHeader');
  
  if (!reduce && (progressBar || header)) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || 0;
      if (progressBar) {
        const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
        const pct = Math.min(100, Math.max(0, (scrollY / max) * 100));
        progressBar.style.transform = `scaleX(${pct / 100})`;
      }
      if (header) {
        header.style.boxShadow = scrollY > 8 ? '0 10px 30px rgba(14,79,82,.08)' : 'none';
      }
    }, { passive: true });
  }

  // 3. How Care Works Rail (Example logic for progressive fill)
  if (!reduce) {
    const railObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rail-active');
        } else if (entry.boundingClientRect.y > 0) {
          entry.target.classList.remove('rail-active');
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-step-node]').forEach(el => railObserver.observe(el));
  }
});
