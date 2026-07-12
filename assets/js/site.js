// Privacy-first event tracking
document.addEventListener('DOMContentLoaded', () => {
  function trackEvent(eventName, eventCategory, eventLabel = null) {
    // Standard data layer push
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      eventCategory: eventCategory,
      eventLabel: eventLabel
    });
    console.log(`[Tracking] ${eventName}: ${eventCategory}${eventLabel ? ' - ' + eventLabel : ''}`);
  }

  // Track Clicks on Calendly
  document.querySelectorAll('a[href*="calendly.com"]').forEach(link => {
    link.addEventListener('click', () => trackEvent('conversion_intent', 'Booking', 'Calendly Click'));
  });

  // Track Clicks on WhatsApp
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => trackEvent('conversion_intent', 'WhatsApp', 'WhatsApp Click'));
  });

  // Track Phone Calls
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => trackEvent('contact_intent', 'Phone', 'Phone Click'));
  });

  // Track Mega Menu Open
  const menuToggle = document.getElementById('pbrMenuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (!isOpen) trackEvent('navigation', 'Mega Menu', 'Opened');
    });
  }
});
