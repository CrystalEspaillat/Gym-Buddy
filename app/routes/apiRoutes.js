
// LOAD DATA
// /////////////////////////////////////////////////////////////////////////////

  var friends = require("../data/friends");

// ROUTING
// /////////////////////////////////////////////////////////////////////////////


  module.exports = function(app) {

      //a GET route that shows all possible friends data
      app.get('/api/friends', (req,res) => {
        res.json(friends);
      });

      // a POST route that adds user data to the friends array
      app.post('/api/friends', (req,res) => {
      
      ///////////////////////////////////////////////////
      // The Great Comparison 
      
        // Get the user's scores data
        var userData = req.body.scores;

        // Empty array to push all of the friends scores into
        var scoresArray = [];
        
        //Loops through all friends
        for(i = 0; i < friends.length; i++){

          // Variable to store the difference in
          var totalDiff = 0;

          for(j = 0; j < userData.length; j++){
            //Save the all scores into variables as numbers
            var friendsScores = parseInt(friends[i].scores[j]);

            // Save the user score into variable as numbers
            var userScore = parseInt(userData[j]);

            // Hardcore math to figure out the difference between scores
            totalDiff += (Math.abs(userScore - friendsScores));
          }

          //push total differences into scoresArray
          scoresArray.push(totalDiff);
        }
      
      ///////////////////////////////////////////////////
      //Match Maker Logic

        //Variable to capture the best match
        var bestFriend = 0;

        // Loop through all of the total differences
        for(i = 0; i < scoresArray.length; i++){
          // For every score, if it is less than or equal to 0
          if (scoresArray[i] <= bestFriend) {
            bestFriend = i
        };
      };
  
      ///////////////////////////////////////////////////
      //The Final Answer!!!!!! 

        // Right now its always saying Alex is the bestFriend because hes index zero
        var finalAnswer = friends[bestFriend];

        // Sends to data over to the survey page
        res.json(finalAnswer);
        //pushes the user into the friends array last so that theyre not included in the comparison
        friends.push(req.body);
    });
    
  };