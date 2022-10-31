const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post(
  "/",
  /*withAuth,*/ async (req, res) => {
    try {
      const newPost = await Post.findByPk(req.body, {
        include: [
          {
            attributes: ["title", "content", "genre"],
          },
        ],
        // ...req.body,
        user_id: req.session.user_id,
      });
      const random = newPost.get({
        plain: true,
      });
      res.status(200).json(random);
    } catch (err) {
      res.status(404).json(err);
    }
  }
);

router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (postData > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({
        message: "No post found with this id.",
      });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
