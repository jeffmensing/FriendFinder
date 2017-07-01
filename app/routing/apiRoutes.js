//Link routes to data source
var friendsData = require("../data/friends");

//Routing

module.exports = function(app) {

  //API Get Request
  app.get("/api/friends", function(req, res) {
      res.json(friendsData);
  });

  //API Post Request
  app.post("/api/friends", function(req, res) {

      //Best Match Holder
      var bestMatch = {
          name: "",
          photo: "",
          difference: 1000
      };

      //Survey results post and parse
      var surveyData = req.body;
      var surveyScores = surveyData.scores;

      






};