(function(){
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  window.gtag('js', new Date());
  window.gtag('config', 'G-3CLP6GLVNE');

  if (window.__pbrLeadTracking) return;
  window.__pbrLeadTracking = true;

  document.addEventListener('click', function(event){
    var target = event.target;
    var voice = target && target.closest ? target.closest('elevenlabs-convai') : null;
    if (voice && typeof window.gtag === 'function') {
      window.gtag('event', 'click_voice_agent', {
        event_category: 'lead',
        event_label: 'elevenlabs_conversation'
      });
    }

    var link = target && target.closest ? target.closest('a') : null;
    if (!link || typeof window.gtag !== 'function') return;

    var href = link.getAttribute('href') || '';
    if (href.indexOf('wa.me') !== -1) {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'lead',
        event_label: href
      });
    }
    if (href.indexOf('tel:') === 0) {
      window.gtag('event', 'click_call', {
        event_category: 'lead',
        event_label: href
      });
    }
    if (href.indexOf('mailto:') === 0) {
      window.gtag('event', 'click_email', {
        event_category: 'lead',
        event_label: href
      });
    }
  });
})();
