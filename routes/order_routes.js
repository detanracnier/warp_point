const orderController = require("../controllers/orderController");

module.exports = function (app) {
    app.post('/api/order', orderController.create);
    app.put('/api/order/:id', orderController.update);
    app.post('/api/order/search', orderController.findAll);
}