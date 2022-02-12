const puppeteer = require('puppeteer');
url = 'https://www.luximmo.bg/'

async function Scraper(url) {
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

  Scraper('https://dev.bg/?s=junior&post_type=job_listing')  
// const puppeteer = require('puppeteer');

// async function scrapeChannel(url) {

//     //open browser, create a new page, navigate to url
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto(url);
//     await page.click('#cookie-bar > p > a.cb-enable.button.small.block')

//     //use deconstructor to pull out first item this func returns, extract text, stringify

//     const [el] = await page.$x('/html/body/div[4]/div[6]/div[2]/div[1]/div/p')
//     const text = await el.getProperty('textContent');
//     const name = await text.jsonValue();

//     browser.close(); //to not pend forever
    
//     console.log({name});

//     return {name};

// }

// scrapeChannel('https://www.luximmo.bg/')