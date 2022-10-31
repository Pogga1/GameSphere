const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// api/users/

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      post_id: req.session.post_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
        post_id: req.session.post_id,
      },
    });
    if (commentData > 0) {
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
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        post_id: req.session.post_id,
      },
    });
    if (!commentData) {
      res.status(404).json({
        message: "No comment found with this id.",
      });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
