const obj = require('http');
const port = 3005;

function required(req,res)
{
    res.write("CODE RUNS CORRECTLY\n");
    res.end("ENNDED");
}

const created = obj.createServer( required ); 
function forLis(e) 
{
    if(e)   console.log("ERROR OCCURED"); 
    console.log("RUNNING CORRECTLY");  
}
created.listen(port , forLis);