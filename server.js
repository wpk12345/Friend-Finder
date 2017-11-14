var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var path = require('path')
var PORT = process.env.PORT || 8080;
 //Get the server running
 
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//including html routes in the server file and passing in express
require("./app/routing/htmlRoutes.js")(app);

 app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
