const puppeteer = require('puppeteer');

async function scrapeChannel(url) {

    //open browser, create a new page, navigate to url
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.click('#cookie-bar > p > a.cb-enable.button.small.block')

    //use deconstructor to pull out first item this func returns, extract text, stringify

    const [el] = await page.$x('/html/body/div[4]/div[6]/div[2]/div[1]/div/p')
    const text = await el.getProperty('textContent').catch((e) => console.log('err: ' + e));
    const name = await text.jsonValue();

    browser.close(); //to not pend forever
    
    console.log({name});

    return {name};

}

scrapeChannel('https://www.luximmo.bg/')