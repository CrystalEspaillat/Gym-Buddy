// DEPENDENCIES
// /////////////////////////////////////////////////////////////////////////////

    var express = require("express");
    var bodyParser = require("body-parser");
    var path = require("path");

// EXPRESS CONFIGURATION
// /////////////////////////////////////////////////////////////////////////////

    // Tells node to create an "express" server
    var app = express();

    // Sets an initial port. We"ll use this later in our listener
    var PORT = process.env.PORT || 8080;

    // Sets up the Express app to handle data parsing
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

// ROUTER
// /////////////////////////////////////////////////////////////////////////////

    require("./app/routes/apiRoutes")(app);
    require("./app/routes/htmlRoutes")(app);

// LISTENER
// /////////////////////////////////////////////////////////////////////////////

    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
  