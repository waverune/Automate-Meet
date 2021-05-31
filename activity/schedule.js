const cron = require('node-cron');
const{takingclass} = require('./main.js');

// const email = "rohityadav_2k19mc109@dtu.ac.in";
// const pw = "deltech123";
// //import * as cron from 'node-cron'
// const meetlink = "https://meet.google.com/lookup/ax66iamb6i?authuser=0&hs=179";

async function getcredential(meetlink , email , pw )
{
  console.log("i am in driver function");
  const task = cron.schedule('*/1 * * * *', async() => {
          
 
    await takingclass(meetlink , email , pw);
    console.log("i am done with class");
    task.stop();
    
 });
 task.start();
 
}





  
console.log("i am starting");
module.exports = {
  getcredential : getcredential
}