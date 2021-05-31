const cron = require('node-cron');
const{takingclass} = require('./main.js');



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