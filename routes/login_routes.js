var passport = require('passport');
var Account = require("../models/account");

module.exports = function (app) {

  app.post('/api/register', function (req, res) {
    console.log("Register request:");
    const { username, password, type, companyName, location, phone } = req.body;
    console.log(username, password, type, companyName, location, phone);
    Account.register(new Account(
      {
        username: username,
        type: type,
        companyName: companyName,
        location: location,
        phone: phone,
      }), password, function (err, account) {
        if (err) {
          return res.json({ error: "That username already exists. Try again" });
        }
        passport.authenticate('local')(req, res, function () {
          res.json(req.user);
        });
      });
  });

  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    console.log("Login request:");
    res.json(req.user);
  });

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};