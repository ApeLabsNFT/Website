(function(){
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  function loadGtag() {
    if (window.__pbrGtagScriptLoaded) return;
    window.__pbrGtagScriptLoaded = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3CLP6GLVNE';
    document.head.appendChild(script);
  }

  function scheduleGtag() {
    var isMobile = window.matchMedia && window.matchMedia('(max-width: 760px)').matches;
    var delay = isMobile ? 6500 : 1600;
    window.setTimeout(loadGtag, delay);
    if (!isMobile && window.requestIdleCallback) {
      window.requestIdleCallback(loadGtag, { timeout: delay + 1200 });
    }
  }

  window.gtag('js', new Date());
  window.gtag('config', 'G-3CLP6GLVNE');
  scheduleGtag();

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
