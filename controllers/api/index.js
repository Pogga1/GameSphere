const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentsRoutes = require("./commentsRoutes");
const postRoutes = require("./postRoutes");

// in Full be /api/users/
router.use("/users", userRoutes);
router.use("/comment", commentsRoutes);
router.use("/post", postRoutes);

module.exports = router;
