const exp = require('express');

const app = exp();

const port = 3000;

app.get('/',(req,res) => res.send("SARATHI B2K"));

app.listen(port,() => console.log("LISTENING THE APP"));