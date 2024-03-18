const express = require("express");
var app = express()

app.use(express.static(__dirname)) // Set the static folder for finding static content (CSS,image)

// Design the response for the main page
app.get('/index.html',function (req,res){
    res.sendFile( __dirname + "/" + "index.html" ); //Send back the main HTML
})

// Design the response for submitting personal information
app.get('/get',function(req, res) {
    var response = { //Get the data from front end
        "Name":req.query.Name,
        "Email":req.query.Email
    };
    console.log(response)
    res.send(`<script>alert('Nice to meet you, ${response.Name}')</script>`); // Send back the action to the front-end
    // res.send(JSON.stringify(response))
    res.end();
})

// Start the server on the corresponding URL
const port = 3040
var server = app.listen(port, function () {
    console.log("hello i'm listening to port "+port);
})