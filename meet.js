const puppeteer = require('puppeteer');
var mailID = "randomXXX@gmail.com"
pw="AAAAAAAAA";
let tab;
mail_tag= "#identifierId"
pw_tag ="#password"


but_id1 = ".VfPpkd-LgbsSe.VfPpkd-LgbsSe";but_id2 = ".Tc9hUd.DShyMc-MjUxODExMTEwNzM0";but_id3 =".tnRfhc.etFl5b";

Meet = {
    load : async () => {
        await Meet.loadBrowser();
        await Meet.getLink();
        await Meet.enterMailID();
        await Meet.enterPw();
        await Meet.followUps();
    },
    loadBrowser : async () => {
        let browser = await puppeteer.launch({headless:false , defaultViewport:null , args:["--start-maximized" , "--disable-notifications"]})
        const context = browser.defaultBrowserContext();
        await context.overridePermissions("https://meet.google.com/" , ['camera','microphone' , 'notifications'])
        let pages = await browser.pages();  //init tab 0
        tab = pages[0]
        await tab.goto("https://edu.google.com/intl/en-GB/products/classroom/");
    },
    getLink : async() =>{
        let element =await tab.$(".gfe-button.gfe-button--medium-emphasis.gfe-button--middle-align" , 'a["href"]')
        let link = await tab.evaluate(function(ele)
        {
        return ele.getAttribute("href");
        }, element)
        await tab.goto(link);
    },
    enterMailID: async () =>{
        await tab.type(mail_tag ,mailID);
        click(but_id1);  // next click
        timeout(2);
    },
    enterPw : async () => {
        selector(pw_tag)
        click(pw_tag)
        await tab.type(pw_tag,pw);
        click(but_id2)  //
    },
    followUps : async () => {
        selector(but_id2)
        click(but_id2)
        selector(but_id3)
        click(but_id3)
        wait4Timeout(10)
    }
}

async function click(but_id){ //click waitfor
    await tab.click(but_id); // pass   email pw & next buttonId =
}
async function selector(but_id){
    await tab.waitForSelector(but_id);
}
async function timeout(t_sec){  // time in seconds
    await tab.waitForTimeout(t_sec*1000);
}
async function wait4Timeout(t_sec){
    await tab.waitForTimeout(t_sec*1000);

}

Meet.load();  //flow begins here
