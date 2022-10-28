const router = require("express").Router();
const { Post } = require("../models");
// const withAuth = require('../utils/auth');

// router.post("/", (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   res.render("coleTest", {
//     title: "hello",
//     message: "Cole and I, Wassup?",
//   });
// });
router.get("/", async (req, res) => {
  // If a session exists, redirect the request to the homepage
  try {
    const dbgamesphereData = await Post.findAll({
      // include: [
      //   {
      //  model: User,
      //   },
      // ],
    });

    const post = dbgamesphereData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/coleTest", (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   res.render("./layout/coleMainTest", { message: "Cole and I, Wassup #2 ?" });
// });

// router.post("/", (req, res) => {
// });

module.exports = router;
