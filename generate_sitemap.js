const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://physiobyrutvi.in';
const LOCALES = ['en', 'mr', 'gu'];
const ROUTES = [
  '/', '/about/', '/services/', '/services/myofascial-release-iastm-cupping/',
  '/conditions/', '/conditions/back-neck-pain/', '/conditions/sports-injury/', 
  '/conditions/post-surgery-rehabilitation/', '/conditions/knee-joint-pain/', 
  '/conditions/sciatica/', '/conditions/posture-and-workstation/', 
  '/conditions/frozen-shoulder/', '/conditions/senior-mobility/',
  '/services/post-operative-rehabilitation/', '/services/sports-rehabilitation/', 
  '/services/senior-physiotherapy/',
  '/how-care-works/', '/service-areas/', '/reviews/', '/faqs/', '/contact/',
  '/privacy-policy/', '/terms/', '/medical-disclaimer/', '/cancellation-policy/'
];

function generateSitemap(locale) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const urls = ROUTES.map(route => `
  <url>
    <loc>${DOMAIN}${prefix}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateIndexSitemap() {
  const sitemaps = LOCALES.map(locale => `
  <sitemap>
    <loc>${DOMAIN}/sitemap-${locale}.xml</loc>
  </sitemap>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;
}

// Generate sitemaps
LOCALES.forEach(locale => {
  fs.writeFileSync(path.join(__dirname, `sitemap-${locale}.xml`), generateSitemap(locale));
});
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), generateIndexSitemap());

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
fs.writeFileSync(path.join(__dirname, 'robots.txt'), robotsTxt);

console.log('Sitemaps and robots.txt generated.');
