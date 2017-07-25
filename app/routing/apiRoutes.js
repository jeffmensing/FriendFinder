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

      //Use this to calc diff between user score and others in db
      var totdiff = 0;

      //loop through all friends possibilities in db
      for (var i=0; i<friendsData.length; i++)
      {
        totdiff = 0;

        //loop through all scores of each friend
        for (var a=0; a<friendsData[a].scores[a]; a++)
        {
            totdiff += Math.abs(parseInt(surveyScores[a]) - parseInt(friendsData[i]));
            if(totdiff <= bestMatch.difference) 
            {
                //Set best match to new friend
                bestMatch.name = friendsData[i].name;
                bestMatch.photo = friendsData[i].photo;
                bestMatch.difference = totdiff;
            }
        }
    }

    //save user data to the db.
    friendsData.push(surveyData);

    //return a JSON with the best match
    res.json(bestMatch);

  });

};