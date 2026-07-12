const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  
  async function snap(url, width, name) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 1080, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Closed Header
    await page.screenshot({ path: `screenshots/${name}_closed.png`, fullPage: true });
    
    // Open Mega Menu
    const toggle = await page.$('#pbrMenuToggle');
    if (toggle) {
      await toggle.click();
      await page.waitForTimeout(600); // Wait for transition
      await page.screenshot({ path: `screenshots/${name}_menu_open.png` });
    }
    await page.close();
  }

  const fs = require('fs');
  if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');

  const fileUrl = 'file://' + require('path').resolve('index.html');
  await snap(fileUrl, 390, 'mobile_390px');
  await snap(fileUrl, 768, 'tablet_768px');
  await snap(fileUrl, 1440, 'desktop_1440px');

  await browser.close();
  console.log('Screenshots captured.');
})();
