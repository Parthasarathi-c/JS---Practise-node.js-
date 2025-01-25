let x = true;
let a = 1;
function task(resolve,reject)
{
    if(x == true) resolve(a++);
    else reject(a++);
} 

const task1 = new Promise(task);
const task2 = new Promise(task);
const task3 = new Promise(task);

Promise.all([task1,task2,task3]).then((a)=>console.log(`${a} is running`)).catch((a)=>console.log(`${a} is not running`));