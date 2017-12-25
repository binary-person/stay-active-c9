var config = {
    // Sets the width and height of the browser
    // Be sure not to include "" else javascript will think this is a string
    "width": 768,
    "height": 1080,
    
    // Default height width //true or false
    "defaultSize": false,
    
    // This enters the username/email and password for c9.io
    "username": "",
    "password": "",
    
    // Location of the ide to "keep alive", usually when you go to the ide, the url is it
    "ideLocation": "", //Example: https://ide.c9.io/USERNAME/PROJECT
    // Take a screenshot to see its working true = take screenshot, false = don't take screenshot
    // it has to be either true or false
    "screenshot": false
};
module.exports = config;