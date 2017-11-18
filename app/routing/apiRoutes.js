//api routes are for our data.  helps determine what data our user sees, as well as what data the user is able to post to our server to store.
//requiring the path module
var path = require('path');
// LOAD DATA
// We are linking our routes to "data" sources.
// This data source holds arrays of information on friends array
// ===============================================================================
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
    app.post("/api/friends", function(req, res){
        friends.push(req.body);
    })
    };
    