const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    const url = 'http://localhost:3000/Afritradehub/';
    console.log('Visiting ' + url);
    const response = await page.goto(url);
    console.log('Status:', response.status());
    await page.screenshot({ path: 'verify_afritradehub.png' });

    const rootUrl = 'http://localhost:3000/';
    console.log('Visiting ' + rootUrl);
    const rootResponse = await page.goto(rootUrl);
    console.log('Root Status:', rootResponse.status());
    await page.screenshot({ path: 'verify_root.png' });

  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
