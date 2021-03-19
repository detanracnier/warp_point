const path = require('path');
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("./config/passport");
const routes = require("./routes");

// create sessions
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
app.use(express.static("client/public"));


// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/warp_point");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
