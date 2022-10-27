const router = require("express").Router();
const userRoutes = require("./userRoutes");

// in Full be /api/users/
router.use("/users", userRoutes);

module.exports = router;
