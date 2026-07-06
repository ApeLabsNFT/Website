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
      '@media (max-width:760px){#pbrVoiceAgent{right:10px!important;bottom:10px!important;max-width:calc(100vw - 20px);}body.pbr-voice-collapsed #pbrVoiceAgent,body.pbr-voice-collapsed elevenlabs-convai{transform:translateY(calc(100% - 58px)) scale(.84);}}'
    ].join('\n');
    document.head.appendChild(style);

    var userExpandedUntil = 0;
    var expandFromUser = function(event) {
      var path = event.composedPath ? event.composedPath() : [];
      var hit = path.some(function(node) {
        return node && node.nodeType === 1 && (
          node.id === 'pbrVoiceAgent' ||
          (node.tagName && node.tagName.toLowerCase() === 'elevenlabs-convai')
        );
      });
      if (!hit && event.target && event.target.closest) hit = !!event.target.closest('#pbrVoiceAgent, elevenlabs-convai');
      if (!hit && document.body.classList.contains('pbr-voice-collapsed')) {
        var x = typeof event.clientX === 'number' ? event.clientX : -1;
        var y = typeof event.clientY === 'number' ? event.clientY : -1;
        hit = x > window.innerWidth - 430 && y > window.innerHeight - 180;
      }
      if (hit) {
        userExpandedUntil = Date.now() + 1500;
        document.body.classList.remove('pbr-voice-collapsed');
      }
    };

    var collapseOnScroll = function() {
      if (Date.now() < userExpandedUntil) return;
      if (window.scrollY > 24) document.body.classList.add('pbr-voice-collapsed');
      else document.body.classList.remove('pbr-voice-collapsed');
    };

    document.addEventListener('pointerdown', expandFromUser, true);
    document.addEventListener('click', expandFromUser, true);
    window.addEventListener('scroll', collapseOnScroll, { passive: true });
    window.addEventListener('resize', collapseOnScroll);
    collapseOnScroll();
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
