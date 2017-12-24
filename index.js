const puppeteer = require('puppeteer');
var config = require('./config.js');

if (config.width == '' || config.width == undefined) {
    console.log('The width in the config is missing, exiting...');
    process.exit(1);
}
if (config.height == '' || config.height == undefined) {
    console.log('The height in the config is missing, exiting...');
    process.exit(1);
}
if (config.username == '' || config.username == undefined) {
    console.log('The username in the config is missing, exiting...');
    process.exit(1);
}
if (config.password == '' || config.password == undefined) {
    console.log('The password in the config is missing, exiting...');
    process.exit(1);
}
if (config.ideLocation == '' || config.ideLocation == undefined) {
    console.log('The ide location in the config is missing, exiting...');
    process.exit(1);
}

(async() => {
    console.log('Started the "Preventer"');

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    if (!config.defaultSize) {
        await page.setViewport({
            'width': config.width,
            'height': config.height
        });
        console.log('Using custom size');
    }else{
        console.log('Using default size');
    }
    await page.goto(config.ideLocation);
    console.log('Gone to the page '+config.ideLocation);
    await page.type('#inpUsernameEmail', config.username);
    await page.type('#inpPassword', config.password);
    await page.evaluate(function() {
        document.getElementById('btnSignIn').click();
    });
    if (config.screenshot == true || config.screenshot == false || config.screenshot == "true" || config.screenshot == "false") {
        if (config.screenshot == true || config.screenshot == "true") {
            await page.screenshot({ path: 'screenshot.png' });
            console.log('Taken screenshot, saved to screenshot.png');
        }
    }
    console.log('Now currently "Preventing"');
    
})();
