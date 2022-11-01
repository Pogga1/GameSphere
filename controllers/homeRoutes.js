const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await Post.findAll({
      include: [
        {
          model: User,

          attributes: { exclude: ["password"] },
        },
      ],
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

router.get("/create-post", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        { model: Comment, include: [Post] },
      ],
    });
    const user = userData.get({ plain: true });
    res.render("create-post", { ...user, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/comments", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        { model: Comment, include: [User] },
      ],
    });
    const post = postData.get({ plain: true });
    res
      .status(200)
      .render("create-post", { ...post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
