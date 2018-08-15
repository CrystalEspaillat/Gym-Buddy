
// LOAD DATA
// /////////////////////////////////////////////////////////////////////////////

  var friends = require("../data/friends");

// ROUTING
// /////////////////////////////////////////////////////////////////////////////

  module.exports = function(app) {

    // API GET Requests
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    // API POST Requests
    app.post("/api/friends", function(req, res) {
  
        friends.push(req.body);
        res.json(true);

    });
    
  };
