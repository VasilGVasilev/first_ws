const puppeteer = require('puppeteer');
url = "https://dev.bg/?s=csd&post_type=job_listing"
async function scrapeJob(url) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);

    const el = await page.$('#primary > div > div.search-heading.text-center > h1 > span.one-of-all-heading');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();

    await browser.close(); // I have not put await in front of browser.close() which
    //return name; // resulted in two blank pages without the relevant scraping
    return name;
  }


module.exports = {
  scrapeJob
}
//how to import jobname set in index to url here
