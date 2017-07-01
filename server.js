// Reqiure npm packages
var express = require("express");
var bodyParser = require("body-parser");

//Setup express server
var app = express();

//Set initial port.
var PORT = process.env.PORT || 8080;

//standard body-parser code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

