(function () {
  // Keep previews and automated checks out of the production funnel.
  if (!/^(www\.)?physiobyrutvi\.in$/.test(window.location.hostname)) return;
  if (window.__pbrLeadTracking) return;
  window.__pbrLeadTracking = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  function loadGtag() {
    if (window.__pbrGtagScriptLoaded) return;
    window.__pbrGtagScriptLoaded = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3CLP6GLVNE';
    document.head.appendChild(script);
  }
  window.gtag('js', new Date());
  window.gtag('config', 'G-3CLP6GLVNE');
  window.setTimeout(loadGtag, 1200);
  document.addEventListener('click', function (event) {
    var target = event.target;
    var link = target && target.closest ? target.closest('a[href]') : null;
    if (!link) return;
    var destination;
    try { destination = new URL(link.href, window.location.origin); } catch (_) { return; }
    var channel = destination.hostname === 'wa.me' ? 'whatsapp'
      : destination.hostname === 'calendly.com' ? 'calendly'
      : destination.protocol === 'tel:' ? 'call'
      : destination.protocol === 'mailto:' ? 'email' : null;
    if (!channel) return;
    loadGtag();
    var region = link.closest('[data-lead-location]');
    var placement = region ? region.dataset.leadLocation
      : link.closest('header') ? 'header'
      : link.closest('footer') ? 'footer'
      : link.closest('#pbrMenu') ? 'menu' : 'content';
    window.gtag('event', 'click_' + channel, {
      event_category: 'contact_intent',
      event_label: channel === 'calendly' ? 'free_15_minute_consultation' : channel,
      contact_method: channel,
      cta_location: placement,
      transport_type: 'beacon'
    });
    // Clicks are intent, not confirmed leads. Do not send message text or patient details.
  });
})();
