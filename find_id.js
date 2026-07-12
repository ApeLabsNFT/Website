const https = require('https');
const url = "https://www.google.com/search?sca_esv=aeba01cdad1f3fb7&hl=en&authuser=0&sxsrf=APpeQnvzHYYrNK-gPasIniwIP3e7KUHoiA:1783839578566&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_6X3YXDW6p-dXG7I7d6lOaTwRCGABt398iInw6vVqAKpF4Ftkp7lvOqbsaWMm-1GGJ3XE7tL2AUW0XGe2593238FOTfl&q=PhysioByRutvi+Reviews&sa=X&ved=2ahUKEwjFraqjyMyVAxX5TmwGHXkPF5UQ0bkNegQIJBAF&biw=1536&bih=703&dpr=1.25";
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};
https.get(url, options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Contains data-pid?', body.includes('data-pid'));
    console.log('Contains place_id?', body.includes('place_id'));
    console.log('Contains placeId?', body.includes('placeId'));
    const m1 = body.match(/"place_id":"([^"]+)"/);
    if(m1) console.log('Found place_id:', m1[1]);
    const m2 = body.match(/data-pid="([^"]+)"/);
    if(m2) console.log('Found pid:', m2[1]);
    const m3 = body.match(/ChIJ[a-zA-Z0-9_-]{20,}/g);
    if(m3) console.log('Found ChIJ:', [...new Set(m3)]);
  });
});
