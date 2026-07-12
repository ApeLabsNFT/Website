document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('pbrMenuToggle');
  const closeBtn = document.getElementById('pbrMenuClose');
  const overlay = document.getElementById('pbrOverlay');
  const menuLinks = overlay ? overlay.querySelectorAll('a, button') : [];

  if (!toggleBtn || !closeBtn || !overlay) return;

  let firstFocusable = menuLinks[0];
  let lastFocusable = menuLinks[menuLinks.length - 1];

  function setOverlay(open) {
    overlay.setAttribute('data-open', open ? '1' : '0');
    overlay.style.opacity = open ? '1' : '0';
    overlay.style.pointerEvents = open ? 'auto' : 'none';
    overlay.style.transform = open ? 'translateY(0)' : 'translateY(-6px)';
    
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    
    if (open) {
      document.body.style.overflow = 'hidden';
      if (firstFocusable) firstFocusable.focus();
    } else {
      document.body.style.overflow = '';
      toggleBtn.focus();
    }
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = overlay.getAttribute('data-open') === '1';
    setOverlay(!isOpen);
  });

  closeBtn.addEventListener('click', () => setOverlay(false));

  // Focus trap
  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOverlay(false);
      return;
    }
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  });

  // Close when clicking links inside menu
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      setOverlay(false);
    });
  });
});
