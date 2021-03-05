const router = require("express").Router();
const passport = require('passport');
const accountController = require("../../controllers/accountController");

// Matches with "/api/account"
router.route("/")
  .get(accountController.findAll)

router.route("/login", passport.authenticate('local'),function(req, res) {
  res.redirect('/')
});

router.route("/register")
  .post(accountController.create);

  module.exports = router;
