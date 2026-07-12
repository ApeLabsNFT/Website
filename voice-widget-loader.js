document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.id = 'pbr-voice-widget';
  Object.assign(container.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '85', // Explicitly requested by user
    pointerEvents: 'auto'
  });
  
  // Future implementation of ElevenLabs / Sarvam agent UI goes here
  // For now, it provides the mounting point with correct styling rules
  
  document.body.appendChild(container);
});
