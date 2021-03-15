const db = require("../models");

// Defining methods for the orderController
module.exports = {
  findAll: function (req, res) {
    db.PlanetNode
      .find(req.query)
      .sort({ name: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  planetList: async function () {
    const systemPlanetList = await db.PlanetNode
      .find({})
      .sort({ name: 1 });
    return systemPlanetList;
  }
};