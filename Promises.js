function result(resolve,reject)
{
    var x = -13;
    if(x>0)  resolve(x); 
    else  reject(x);
}

const statement = new Promise(result);

function suc(x)
{
     if( x % 2 == 0 ) { console.log(`${x} is a even n.o`);  }
    else { console.log(`${x} is an odd n.o`);  }
}
function fail(x)
{
    console.log(`${x} is a negative n.o`)
}

statement.then(suc).catch(fail);