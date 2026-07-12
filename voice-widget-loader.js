(function(){
  if (window.__pbrConvaiLoaderStarted) return;
  window.__pbrConvaiLoaderStarted = true;

  function installVoiceCollapse() {
    if (window.__pbrVoiceCollapseInstalled) return;
    window.__pbrVoiceCollapseInstalled = true;

    var style = document.createElement('style');
    style.textContent = [
      '#pbrVoiceAgent, elevenlabs-convai{transition:transform .28s cubic-bezier(.2,.7,.2,1),opacity .28s cubic-bezier(.2,.7,.2,1);transform-origin:right bottom;}',
      '#pbrVoiceAgent{position:fixed!important;right:clamp(12px,3vw,24px)!important;bottom:clamp(12px,3vw,24px)!important;z-index:92!important;max-width:min(390px,calc(100vw - 24px));}',
      'body.pbr-voice-collapsed #pbrVoiceAgent{transform:translateY(calc(100% - 68px)) scale(.88);opacity:.94;}',
      'body.pbr-voice-collapsed elevenlabs-convai{transform:translateY(calc(100% - 68px)) scale(.88);opacity:.94;}',
      '@media (max-width:760px){#pbrVoiceAgent{right:10px!important;bottom:10px!important;max-width:calc(100vw - 20px);}body.pbr-voice-collapsed #pbrVoiceAgent,body.pbr-voice-collapsed elevenlabs-convai{transform:translateY(calc(100% - 58px)) scale(.84);}}',
      '#pbrVoiceLauncher{position:fixed;right:clamp(12px,3vw,24px);bottom:clamp(12px,3vw,24px);z-index:93;width:68px;height:68px;border-radius:50%;background:var(--color-coral,#EE7B5B);border:none;cursor:pointer;opacity:0;pointer-events:none;transform:translateY(12px) scale(.9);transition:transform .3s cubic-bezier(.2,.7,.2,1),opacity .3s;box-shadow:0 8px 24px rgba(238,123,91,.4);display:flex;align-items:center;justify-content:center;}',
      '.pbrVoiceOrb{width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.2);position:relative;display:block;}',
      '.pbrVoiceOrb:after{content:"";position:absolute;inset:8px 7px 9px 9px;border-radius:50%;background:linear-gradient(140deg,rgba(255,255,255,.86),rgba(255,255,255,0) 52%);transform:rotate(-18deg);}',
      'body.pbr-voice-collapsed #pbrVoiceAgent{opacity:0;visibility:hidden;pointer-events:none;transform:translateY(12px) scale(.96);}',
      'body.pbr-voice-collapsed #pbrVoiceLauncher{opacity:1;pointer-events:auto;transform:none;}',
      '@media (max-width:760px){#pbrVoiceLauncher{right:14px;bottom:14px;width:58px;height:58px;}.pbrVoiceOrb{width:40px;height:40px;}}'
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
