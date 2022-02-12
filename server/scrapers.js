const puppeteer = require('puppeteer');

async function scrapeChannel(url) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);

    const el = await page.$('#primary > div > div.search-heading.text-center > h1 > span.one-of-all-heading');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();

    
    console.log({name});
    return {name};
    browser.close();
    
  };

scrapeChannel('https://dev.bg/?s=junior&post_type=job_listing')  