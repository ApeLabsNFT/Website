const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 }); // iPhone 12 Pro dimensions

  // Serve static files since support.min.js needs HTTP
  const express = require('express');
  const app = express();
  app.use(express.static(__dirname));
  const server = app.listen(3000, async () => {
    try {
      await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
      await page.screenshot({ path: 'screenshot_mobile.png', fullPage: true });
      
      await page.setViewport({ width: 1440, height: 900 }); // Desktop dimensions
      await page.screenshot({ path: 'screenshot_desktop.png', fullPage: true });
    } catch (e) {
      console.error(e);
    } finally {
      server.close();
      await browser.close();
    }
  });
})();
