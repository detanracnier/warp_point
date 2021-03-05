const router = require("express").Router();
const accountRoutes = require("./account");

// account routes
router.use("/account", accountRoutes);

module.exports = router;
