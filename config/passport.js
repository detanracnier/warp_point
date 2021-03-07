const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const Account = require("../models/account");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(Account.authenticate()));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Exporting our configured passport
module.exports = passport;
