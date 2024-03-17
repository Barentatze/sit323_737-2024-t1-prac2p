const express = require("express");
var app = express()

app.use(express.static(__dirname)) // Set the static folder for finding static content (CSS,image)

app.get('/index.html',function (req,res){
    res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/get',function(req, res) {
    var response = {
        "Name":req.query.Name,
        "Email":req.query.Email
    };
    console.log(response)
    res.end(JSON.stringify(response));
})

const port = 3040
var server = app.listen(port, function () {
    console.log("hello i'm listening to port "+port);
})