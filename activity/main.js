const puppeteer = require('puppeteer');
const cron = require('node-cron');
//const myselector = require('./selector.js');
let browser;
async function takingclass(meetlink , email , pw)
{
     browser = await puppeteer.launch({headless:false , defaultViewport:null});
    const context = await browser.defaultBrowserContext();
    await context.overridePermissions(meetlink , ['camera' , 'microphone' , 'notifications']);
    let allTab = await browser.pages();
     let tab = allTab[0];
    
    await signin(email , pw);
    await tab.goto(meetlink);
    await disablenotif(tab);
    await leaveclass(tab);
   

    

    



}

async function leaveclass(tab)
{
       const task = cron.schedule('*/1 * * * *' , function()
       {
             tab.close();
             task.stop();
       })
       task.start();
}

async function disablenotif(newtab)
{
        await newtab.waitForSelector(".U26fgb.JRY2Pb.mUbCce.kpROve.uJNmj.QmxbVb.HNeRed.M9Bg4d")
         let disablearr = await newtab.$$(".U26fgb.JRY2Pb.mUbCce.kpROve.uJNmj.QmxbVb.HNeRed.M9Bg4d");
         //console.log(disablearr + "disable arr ");
         await newtab.evaluate(function(ele){
                 ele.click();
         } , disablearr[0] )
         await newtab.evaluate(function(ele){
                  ele.click();
        } , disablearr[1] )
         /// click join button
         await newtab.waitForSelector('div[jsname="Qx7uuf"]');
         let joinbutton = await newtab.$('div[jsname="Qx7uuf"]');
       let ans =  await newtab.evaluate(function(joinbutton){
             return joinbutton.click();
        } , joinbutton);
}

async function signin(email , pw)
{
     let tab = await browser.newPage();
     await tab.goto("https://edu.google.com/intl/en-GB/products/classroom/");
    await tab.waitForTimeout(1000);
    let element =await tab.$(".gfe-button.gfe-button--medium-emphasis.gfe-button--middle-align" , 'a["href"]');
    let link = await tab.evaluate(function(ele)
    {
        return ele.getAttribute("href");
    } , element)
     await tab.goto(link);
     await tab.type("#identifierId" , email);
     await tab.click(".VfPpkd-LgbsSe.VfPpkd-LgbsSe");
     await tab.waitForTimeout(2000);
     await tab.waitForSelector("#password");
     await tab.click("#password");
     await tab.type("#password" , pw);
     await tab.click(".VfPpkd-LgbsSe.VfPpkd-LgbsSe");
     await tab.waitForTimeout(10000); 

}


module.exports = {
    takingclass : takingclass
}