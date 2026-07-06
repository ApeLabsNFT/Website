(function(){
  if (window.__pbrConvaiLoaderStarted) return;
  window.__pbrConvaiLoaderStarted = true;

  function installVoiceCollapse() {
    if (window.__pbrVoiceCollapseInstalled) return;
    window.__pbrVoiceCollapseInstalled = true;

    var style = document.createElement('style');
    style.textContent = [
      '#pbrVoiceAgent{position:fixed!important;right:clamp(14px,3vw,24px)!important;bottom:clamp(14px,3vw,24px)!important;z-index:92!important;max-width:min(390px,calc(100vw - 28px));transition:opacity .22s ease,transform .22s cubic-bezier(.2,.7,.2,1),visibility .22s ease;transform-origin:right bottom;}',
      '#pbrVoiceAgent elevenlabs-convai{display:block;}',
      '#pbrVoiceLauncher{position:fixed;right:clamp(16px,3vw,26px);bottom:clamp(16px,3vw,26px);z-index:93;width:62px;height:62px;border:1px solid rgba(14,79,82,.14);border-radius:999px;background:#fff;box-shadow:0 18px 44px rgba(14,79,82,.22);display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;opacity:0;pointer-events:none;transform:translateY(8px) scale(.86);transition:opacity .22s ease,transform .22s cubic-bezier(.2,.7,.2,1),box-shadow .22s ease;}',
      '#pbrVoiceLauncher:hover{box-shadow:0 22px 56px rgba(14,79,82,.28);}',
      '#pbrVoiceLauncher:focus-visible{outline:3px solid rgba(238,123,91,.55);outline-offset:4px;}',
      '.pbrVoiceOrb{width:42px;height:42px;border-radius:50%;background:conic-gradient(from 210deg,#2fe4f0,#4e63ff 24%,#f8fbff 42%,#22c7d9 56%,#2747c8 74%,#a9ffff 100%);box-shadow:inset -7px -8px 14px rgba(7,34,72,.25),inset 8px 8px 14px rgba(255,255,255,.68);position:relative;display:block;}',
      '.pbrVoiceOrb:after{content:"";position:absolute;inset:8px 7px 9px 9px;border-radius:50%;background:linear-gradient(140deg,rgba(255,255,255,.86),rgba(255,255,255,0) 52%);transform:rotate(-18deg);}',
      'body.pbr-voice-collapsed #pbrVoiceAgent{opacity:0;visibility:hidden;pointer-events:none;transform:translateY(12px) scale(.96);}',
      'body.pbr-voice-collapsed #pbrVoiceLauncher{opacity:1;pointer-events:auto;transform:none;}',
      '@media (max-width:760px){#pbrVoiceAgent{right:10px!important;bottom:10px!important;max-width:calc(100vw - 20px);}#pbrVoiceLauncher{right:14px;bottom:14px;width:58px;height:58px;}.pbrVoiceOrb{width:40px;height:40px;}}'
    ].join('\n');
    document.head.appendChild(style);

    var launcher = document.createElement('button');
    launcher.id = 'pbrVoiceLauncher';
    launcher.type = 'button';
    launcher.setAttribute('aria-label', 'Open PhysioByRutvi voice assistant');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.innerHTML = '<span class="pbrVoiceOrb" aria-hidden="true"></span>';
    document.body.appendChild(launcher);

    var expandedByUser = false;

    function setCollapsed(collapsed) {
      document.body.classList.toggle('pbr-voice-collapsed', collapsed);
      launcher.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    }

    function collapseForScroll() {
      expandedByUser = false;
      setCollapsed(window.scrollY > 24);
    }

    launcher.addEventListener('click', function() {
      expandedByUser = true;
      setCollapsed(false);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'click_voice_agent', { event_category: 'lead', event_label: 'elevenlabs_launcher' });
      }
    });

    document.addEventListener('pointerdown', function(event) {
      var target = event.target;
      var voice = target && target.closest ? target.closest('#pbrVoiceAgent, elevenlabs-convai') : null;
      if (voice) expandedByUser = true;
    }, true);

    window.addEventListener('scroll', function() {
      if (expandedByUser && window.scrollY > 24) {
        expandedByUser = false;
        setCollapsed(true);
        return;
      }
      collapseForScroll();
    }, { passive: true });
    window.addEventListener('resize', function() {
      if (!expandedByUser) setCollapsed(window.scrollY > 24);
    });

    setCollapsed(window.scrollY > 24);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installVoiceCollapse);
  else installVoiceCollapse();

  if (window.customElements && window.customElements.get('elevenlabs-convai')) return;

  var script = document.createElement('script');
  script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
  script.async = true;
  script.type = 'text/javascript';
  document.head.appendChild(script);
})();
