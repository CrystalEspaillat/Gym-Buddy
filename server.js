// DEPENDENCIES
// Series of npm packages that give the server useful functionality
// /////////////////////////////////////////////////////////////////////////////

    var express = require("express");
    var bodyParser = require("body-parser");
    var path = require("path");

// EXPRESS CONFIGURATION
// Sets up the basic properties for the express server
// /////////////////////////////////////////////////////////////////////////////

    // Tells node to create an "express" server
        var app = express();

    // Sets an initial port. We"ll use this later in our listener
        var PORT = process.env.PORT || 8080;

    // Sets up the Express app to handle data parsing
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

// ROUTER
// Points the server to a series of "route" files. Provides a map for how to handle requests.
// /////////////////////////////////////////////////////////////////////////////

    require("./routes/apiRoutes")(app);
    require("./routes/htmlRoutes")(app);

// LISTENER
// Starts the server
// /////////////////////////////////////////////////////////////////////////////

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  