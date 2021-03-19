const path = require("path");
const router = require("express").Router();
const loginRoutes = require("./login_routes");
const orderRoutes = require("./order_routes");
const starchartRoutes = require("./starchart_routes");

// Use routes
router.use("", loginRoutes);
router.use("/api/order", orderRoutes);
router.use("/api/starchart", starchartRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

module.exports = router;
