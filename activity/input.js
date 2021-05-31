
const cron = require('node-cron');
//const { takingclass } = require('./main');
const {getcredential} = require('./schedule.js');
let arr = [
    {
        
    }

]
console.log("i am in input function ");

const task = cron.schedule('*/1 * * * *' , async function(){
     const currentDate = new Date();  
    for(let i=0;i<arr.length;i++)
    {
        let obj = arr[i];

        if(Number(obj.Time) == currentDate.getHours())
        {
            console.log(" i am matched");
            await getcredential(obj.meetlink , obj.email , obj.pw);
            
            arr.splice(i , 1);
        }

        if(arr.length==0)
        {
            console.log(arr.length + "i am in final");

            task.stop();
        }

    }
});
task.start();






