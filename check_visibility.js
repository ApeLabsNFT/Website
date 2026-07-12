const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const express = require('express');
  const app = express();
  app.use(express.static(__dirname));
  const server = app.listen(3001, async () => {
    try {
      await page.goto('http://localhost:3001/index.html', { waitUntil: 'networkidle0' });
      
      const sections = await page.evaluate(() => {
        const results = [];
        document.querySelectorAll('section').forEach((el, i) => {
           const rect = el.getBoundingClientRect();
           results.push(`Section ${i} (${el.id || el.getAttribute('aria-label') || 'no-id'}): visible=${rect.height > 0 && rect.width > 0}, height=${rect.height}, top=${rect.top}`);
        });
        return results;
      });
      
      console.log('--- SECTIONS ---');
      console.log(sections.join('\n'));
      
      const main = await page.evaluate(() => {
        const el = document.querySelector('main');
        if (!el) return 'No main';
        const rect = el.getBoundingClientRect();
        return `Main: height=${rect.height}`;
      });
      console.log(main);
      
    } catch (e) {
      console.error(e);
    } finally {
      server.close();
      await browser.close();
    }
  });
})();
