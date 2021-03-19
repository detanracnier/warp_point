const orderController = require("../controllers/orderController");
const router = require("express").Router();

router.route("/")
.post(orderController.create);
router.route("/:id")
.put(orderController.update);
router.route("/search")
.post(orderController.findAll);

module.exports = router;