const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3213

app.use(bodyParser());

app.all("*", (req, res) => {
    console.log("---BEGIN-REQUEST---");
    console.log(req.method + " "  + req.path);
    console.log("HEADERS:");
    console.log(req.headers);
    console.log("BODY:");
    console.log(req.body);
    console.log("---END-REQUEST---");
    res.send("OK");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

