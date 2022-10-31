const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await Post.findAll({
      include: [{ model: User, 
      
        attributes: { exclude: ["password"] },}],
    
    });

    const users = userData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        { model: Comment, include: [User] },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("post", { ...post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).JSON(err);
  }
});

router.get("/post/:genre", async (req, res) => {
  try{
    const postGenre = await post.findByPK(req.params.genre, {
      include: [
        { model: User, attributes: ["username"] },
        { model: Comment, include: [User] },
      ],
    });
    const post = postGenre.get({ plain: true });
    res.render("post", { ...post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).JSON(err);
  }
});


module.exports = router;
