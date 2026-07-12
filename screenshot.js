const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Desktop
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'desktop.png', fullPage: true });

    // Mobile
    await page.setViewport({ width: 375, height: 812 });
    await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'mobile.png', fullPage: true });
    
    // Condition Page
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://127.0.0.1:3000/conditions/back-neck-pain/', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: 'condition.png', fullPage: true });

    await browser.close();
})();
