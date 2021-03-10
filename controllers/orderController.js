const db = require("../models");

// Defining methods for the orderController
const orderController = {
  findAll: function (req, res) {
    db.Order
      .find(req.query)
      .sort({ creationDate: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const newUser = new db.Order({...req.body});
    newUser.save((err,response)=>{
      if (err) { return res.status(422).json(err)}
      res.json(response)
    })
  }
};

module.exports = orderController;
