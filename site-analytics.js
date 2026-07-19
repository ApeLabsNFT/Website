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

  function cleanText(value) {
    return String(value || '').replace(/\s+/g, ' ').trim().slice(0, 100);
  }

  function ctaLocation(element) {
    if (!element) return 'unknown';
    var explicit = element.getAttribute('data-analytics-location');
    if (explicit) return cleanText(explicit);
    var section = element.closest('header, footer, section, nav, [id]');
    if (!section) return 'page';
    return cleanText(section.id || section.getAttribute('aria-label') || section.className || section.tagName).slice(0, 60);
  }

  function trackLead(eventName, leadType, element) {
    if (typeof window.gtag !== 'function') return;
    loadGtag();
    window.gtag('event', eventName, {
      event_category: 'lead',
      lead_type: leadType,
      cta_text: cleanText(element && (element.getAttribute('aria-label') || element.textContent)),
      cta_location: ctaLocation(element),
      page_path: window.location.pathname
    });
  }

  document.addEventListener('click', function(event){
    var target = event.target;
    var voice = target && target.closest ? target.closest('elevenlabs-convai') : null;
    if (voice) trackLead('click_voice_agent', 'voice_agent', voice);

    var link = target && target.closest ? target.closest('a') : null;
    if (!link || typeof window.gtag !== 'function') return;

    var href = link.getAttribute('href') || '';
    if (href.indexOf('wa.me') !== -1) {
      trackLead('click_whatsapp', 'whatsapp', link);
    }
    if (href.indexOf('calendly.com/') !== -1) {
      trackLead('click_calendly', 'free_15_minute_consultation', link);
    }
    if (href.indexOf('tel:') === 0) {
      trackLead('click_call', 'phone_call', link);
    }
    if (href.indexOf('mailto:') === 0) {
      trackLead('click_email', 'email', link);
    }
  });
})();
