const obj = require("prompt-sync");
const prompt = obj();
let p = true;
function order(resolve,reject)
{
    if(p == true) resolve("Order Proceed");
    else reject("Order failed");
}

let processOrder = new Promise(order);

function critical() { p = false; console.log("P is now false"); } 

processOrder.then( (msg) => console.log(msg) ).catch( (msg)=> console.log(msg) ).finally(critical);
processOrder.then( (msg) => console.log(`yes${msg}`) ).catch( (msg)=> console.log(msg) ).finally(() => console.log("end 2"));

