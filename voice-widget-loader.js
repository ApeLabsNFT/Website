(function(){
  if (window.__pbrConvaiLoaderStarted) return;
  window.__pbrConvaiLoaderStarted = true;

  if (window.customElements && window.customElements.get('elevenlabs-convai')) return;

  var script = document.createElement('script');
  script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
  script.async = true;
  script.type = 'text/javascript';
  document.head.appendChild(script);
})();
