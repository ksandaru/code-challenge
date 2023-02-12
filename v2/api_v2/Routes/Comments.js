const express = require("express");
const router = express.Router();

const Comment = require("../Model/Comment");
const User = require("../Model/User");

//get all comments
router.get("/", async (req, res) => {
  const comments = await Comment.find();
  if (!comments) {
    return res.status(404).json({ msg: 'No comments found' });
  }
  res.status(200).json(comments);
});


//get a single comment
router.get("/:id", async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
        return res.status(404).json({ msg: 'Comment not found' });
      }
    res.status(200).json(comment);
  });

//get comments for a particular user
//--todo:

//get all replies for a single 'first comment'
//--todo:

// create & save a new comment
router.post("/", async (req, res) => {
  const user = await User.findOne({ name: req.body.creator });
  if (!user) return res.status(400).json({ error: 'User not found' });
    const comment = new Comment({
      creator: req.body.creator,
      body: req.body.body,
      upvotes:req.body.upvotes,
      userprofile: user.profImage,
      time: req.body.time
    });
    await comment.save().then((data) => {
      res.send({ msg: "comment created successfully!", comment: comment });
    });
  });

module.exports = router;
