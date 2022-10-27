const router = require("express").Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

// router.post("/", (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   res.render("coleTest", {
//     title: "hello",
//     message: "Cole and I, Wassup?",
//   });
// });
router.get("/", (req, res) => {
  // If a session exists, redirect the request to the homepage
  console.log(req, res);
  res.render("layouts/Main", {
    message: "Welcome to GameSphere!",
  });
});



// router.post("/", (req, res) => {

// });

module.exports = router;
