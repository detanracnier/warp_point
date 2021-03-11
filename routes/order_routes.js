const orderController = require("../controllers/orderController");

module.exports = function (app) {
    app.post('/api/order', orderController.create);
    app.put('/api/order', orderController.update);
    app.get('/api/order', orderController.findAll);
}