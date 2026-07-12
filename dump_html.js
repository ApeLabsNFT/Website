const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('LOG:', msg.text()));
    page.on('pageerror', e => console.log('ERR:', e.message));
    await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle0' });
    const html = await page.evaluate(() => document.body.innerHTML);
    console.log("HTML_DUMP_START");
    console.log(html.substring(0, 2000));
    console.log("HTML_DUMP_END");
    await browser.close();
})();
