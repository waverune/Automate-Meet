const puppeteer = require('puppeteer');
//const yarn  = require('yarn');
let email = "rohityadav_2k19mc109@dtu.ac.in";
let pw = "deltech123";
//let browser;
let tab;
(async function()
{
    let browser = await puppeteer.launch({headless:false , defaultViewport:null , args:["--start-maximized" , "--disable-notifications"]});
    const context = browser.defaultBrowserContext();
    await context.overridePermissions("https://meet.google.com/" , ['camera','microphone' , 'notifications'
])
    let pages = await browser.pages();
    tab = pages[0];
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
     await tab.waitForSelector(".Tc9hUd.DShyMc-MjUxODExMTEwNzM0");
     await tab.click(".Tc9hUd.DShyMc-MjUxODExMTEwNzM0");

      await tab.waitForSelector(".tnRfhc.etFl5b");
      
      await tab.click(".tnRfhc.etFl5b");
      
      
      await tab.waitForTimeout(10000);
   
      await dismissbutton(browser);
      //console.log(pendingpromise);
      

      
      
      




    //     await tab.waitForTimeout(5000)
    //     await tab.waitForSelector('div[data-id="TvD9Pc"]' , {visible:true});
    //   let dismisslist = await tab.$$('div[data-id="TvD9Pc"]');
    //   let cancel = dismisslist[1];
    //   let dismissbutton = await tab.evaluate(function(ele){
    //       return ele.querySelector(".U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.kHssdc.HvOprf.DEhM1b.M9Bg4d").click();
    //   } , cancel)
    //   console.log(dismissbutton);
    //     
    //   
    //   await tab.click(dismissbutton);

     
     //console.log(classlink);
     //await tab.waitForTimeout(2000);
     //await tab.click(".tnRfhc etFl5b");

    //await tab.waitForTimeout(2000);

    

})()


async function dismissbutton(browser)
{
    try
    {
        console.log("inside dismiss");
        let newtabsize = await browser.pages();
        let newtab = newtabsize[1];
    //    await newtab.waitForTimeout(10000);
    //    let object = await newtab.waitForSelector('div[data-id="TvD9Pc"]' , {visible:true});
    //     let dismisslist = await newtab.$$('div[data-id="TvD9Pc"]');
    //     let cancel = dismisslist[1];
    //     let dismissbutton = await newtab.evaluate(function(ele){
    //       return ele.querySelector(".U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.kHssdc.HvOprf.DEhM1b.M9Bg4d").click();
         
    //   } , cancel)
      /// disable camera and mic
         await newtab.waitForSelector(".U26fgb.JRY2Pb.mUbCce.kpROve.uJNmj.QmxbVb.HNeRed.M9Bg4d")
         let disablearr = await newtab.$$(".U26fgb.JRY2Pb.mUbCce.kpROve.uJNmj.QmxbVb.HNeRed.M9Bg4d");
         console.log(disablearr + "disable arr ");
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
       

        // await newtab.waitForTimeout(2000);
        // 


    }
    catch(error)
    {
        console.log(error);
    }
}



/*function dismissbutton(browser)
{

    return new Promise(function(scb , fcb){
        console.log("inside dismiss button");
        let newtabsize = browser.pages();
        newtabsize.then(function(newtabsize)
        {
            //let newtab = newtabsize[1];
            console.log(newtabsize.length + "insidenewtab");
             return newtabsize.length;
             // return 
        })
        .then(function(l)
        {
            console.log(l+"scb");
            scb(l);
        })
        .catch(function(ee){
            fcb(ee);
        })
        

        
    })
}*/


