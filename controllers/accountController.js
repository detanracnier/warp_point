const passport = require('passport');
const db = require("../models/");

// Defining methods for the accountController
const accountController = {
  findAll: function (req, res) {
    db.Account
      .find(req.query)
      .sort({ companyName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const newUser = new db.Account({...req.body});
    newUser.save((err,response)=>{
      if (err) { return res.status(422).json(err)}
      res.json(response)
    })
  }
};

module.exports = accountController;
