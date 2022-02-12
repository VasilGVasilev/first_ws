const puppeteer = require('puppeteer');

async function scrapeJob(url) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);

    const el = await page.$('#primary > div > div.search-heading.text-center > h1 > span.one-of-all-heading');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();
    
    browser.close();
    return {name};
    
  };

//how to import jobname set in index to url here
module.exports = scrapeJob;