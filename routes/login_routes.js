const passport = require('passport');
const Account = require("../models/account");
const jwt = require('jwt-simple');
const router = require("express").Router();

const secret = "blackhole";

router.route('/register')
.post(function (req, res) {
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
        const payload = req.user;
        const token = jwt.encode(payload, secret);
        console.log("Sending token", token);
        res.json(token);
      });
    });
});

router.route('/authenticate')
  .post(passport.authenticate('local'), function (req, res) {
  const payload = req.user;
  const token = jwt.encode(payload, secret);
  console.log("Sending token", token);
  res.json(token);
});

router.route('/logout')
  .post(function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;