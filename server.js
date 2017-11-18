var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var path = require('path')
var PORT = process.env.PORT || 8080;
 
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


 app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
