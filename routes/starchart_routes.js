const planetNodeController = require("../controllers/planetNodeController");

module.exports = function (app) {
    app.get('/api/starchart', planetNodeController.findAll);
}