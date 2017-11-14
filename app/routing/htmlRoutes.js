//requiring the path module
var path = require('path');
//bringing in express 
module.exports = function(app) {
//html routes.  this one will link to the homepage. we use app.use so it will 'default' to the home.html as long as the user doesn't navigate to other pages
app.use( function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  //this one will send the user to the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
};