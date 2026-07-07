(function(){
  function getSection() {
    return document.getElementById('reviews');
  }

  function stars(rating) {
    var full = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
    return '★★★★★'.slice(0, full) + '☆☆☆☆☆'.slice(0, 5 - full);
  }

  function escapeHTML(value) {
    return String(value || '').replace(/[&<>"']/g, function(ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }

  function initial(name) {
    return (String(name || 'G').trim().charAt(0) || 'G').toUpperCase();
  }

  function card(review) {
    var author = review.author || 'Google reviewer';
    var authorHTML = review.authorUri
      ? '<a href="' + escapeHTML(review.authorUri) + '" target="_blank" rel="noopener" style="color:#1B2021;text-decoration:none;">' + escapeHTML(author) + '</a>'
      : escapeHTML(author);
    return [
      '<article style="scroll-snap-align:start;flex:0 0 clamp(260px,72vw,360px);background:#fff;border:1px solid rgba(27,32,33,.08);border-radius:24px;padding:clamp(24px,3vw,32px);box-shadow:0 14px 36px rgba(14,79,82,.08);">',
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">',
          '<div style="color:#EE7B5B;font-size:16px;letter-spacing:2px;" aria-label="' + escapeHTML(review.rating || 5) + ' out of 5 stars">' + stars(review.rating || 5) + '</div>',
          '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" fill="#34A853"/><path d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.07H2.18a11 11 0 0 0 0 9.86l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335"/></svg>',
        '</div>',
        '<p style="font-family:\'Fraunces\',serif;font-size:clamp(17px,2vw,21px);line-height:1.35;color:#1B2021;margin:0;">"' + escapeHTML(review.text) + '"</p>',
        '<div style="display:flex;align-items:center;gap:12px;margin-top:24px;">',
          '<div style="width:42px;height:42px;border-radius:50%;background:#CFE3D8;color:#0E4F52;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;overflow:hidden;">',
            review.photoUri ? '<img src="' + escapeHTML(review.photoUri) + '" alt="" referrerpolicy="no-referrer" loading="lazy" style="width:100%;height:100%;object-fit:cover;">' : escapeHTML(initial(author)),
          '</div>',
          '<div><div style="font-weight:600;font-size:14.5px;color:#1B2021;">' + authorHTML + '</div><div style="color:#717470;font-size:12.5px;">Google review' + (review.relativeTime ? ' · ' + escapeHTML(review.relativeTime) : '') + '</div></div>',
        '</div>',
      '</article>'
    ].join('');
  }

  function moreCard(url) {
    return [
      '<a href="' + escapeHTML(url) + '" target="_blank" rel="noopener" data-reveal data-delay="200" style="scroll-snap-align:start;flex:0 0 clamp(220px,60vw,280px);background:#0E4F52;border-radius:24px;padding:clamp(26px,3vw,34px);text-decoration:none;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 14px 36px rgba(14,79,82,.12);">',
        '<div style="color:#CFE3D8;font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;">More reviews</div>',
        '<div><div style="font-family:\'Fraunces\',serif;font-weight:600;font-size:clamp(24px,3vw,32px);color:#FDF8F5;line-height:1.05;">Read every Google review</div><span style="display:inline-flex;align-items:center;gap:8px;margin-top:16px;color:#EE7B5B;font-weight:600;font-size:14.5px;">Open Google reviews</span></div>',
      '</a>'
    ].join('');
  }

  function findReviewTrack() {
    var section = getSection();
    if (!section) return null;
    var tracks = Array.prototype.slice.call(section.querySelectorAll('div'));
    return tracks.find(function(el) {
      var style = el.getAttribute('style') || '';
      return /overflow-x\s*:\s*auto/i.test(style) && /scroll-snap-type\s*:/i.test(style);
    });
  }

  function renderGoogleReviews(data, attempt) {
      attempt = attempt || 0;
      if (!data || !data.connected || !Array.isArray(data.reviews) || !data.reviews.length) return;
      var section = getSection();
      var track = findReviewTrack();
      if (!section || !track) {
        if (attempt < 20) window.setTimeout(function() { renderGoogleReviews(data, attempt + 1); }, 150);
        return;
      }

      var reviews = data.reviews.slice(0, 5);
      track.innerHTML = reviews.map(card).join('') + moreCard(data.googleMapsUri || 'https://www.google.com/search?q=PhysioByRutvi%20reviews');

      var ratingEl = section.querySelector('[data-google-rating]');
      if (ratingEl && data.rating) ratingEl.textContent = Number(data.rating).toFixed(1);

      var countEl = section.querySelector('[data-google-review-count]');
      if (countEl && data.userRatingCount) countEl.textContent = data.userRatingCount + ' verified Google reviews';

      var link = section.querySelector('[data-google-review-link]');
      if (link && data.googleMapsUri) link.href = data.googleMapsUri;
  }

  var loaded = false;
  function loadReviews() {
    if (loaded) return;
    loaded = true;
    fetch('/data/google-reviews.json?ts=' + Date.now(), { cache: 'no-store' })
      .then(function(response) { return response.ok ? response.json() : null; })
      .then(function(data) { renderGoogleReviews(data, 0); })
      .catch(function(){});
  }

  function scheduleReviews(attempt) {
    attempt = attempt || 0;
    var section = getSection();
    if (!section) {
      if (attempt < 20) window.setTimeout(function() { scheduleReviews(attempt + 1); }, 150);
      else window.setTimeout(loadReviews, 1800);
      return;
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries) {
        if (entries.some(function(entry) { return entry.isIntersecting; })) {
          io.disconnect();
          loadReviews();
        }
      }, { rootMargin: '720px 0px' });
      io.observe(section);
      return;
    }
    window.setTimeout(loadReviews, 1400);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function() { scheduleReviews(0); });
  else scheduleReviews(0);
})();
