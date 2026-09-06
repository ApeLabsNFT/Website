(function () {
  if (window.__pbrConvaiLoaderStarted) return;
  window.__pbrConvaiLoaderStarted = true;
  var button = document.getElementById('pbrVoiceLauncher');
  var panel = document.getElementById('pbrVoiceAgent');
  var close = document.getElementById('pbrVoiceClose');
  if (!button || !panel || !close) return;
  var loaded = false;
  function collapse() {
    panel.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    button.focus();
  }
  button.addEventListener('click', function () {
    panel.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    close.focus();
    if (!loaded) {
      loaded = true;
      var script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.onerror = function () {
        panel.querySelector('[data-voice-status]').textContent = 'The voice assistant could not load. Please call or use WhatsApp.';
        loaded = false;
      };
      document.head.appendChild(script);
    }
  });
  close.addEventListener('click', collapse);
  panel.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') collapse();
  });
})();
