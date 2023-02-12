const express = require("express");
const router = express.Router();

const User = require("../Model/User");
const Comment = require("../Model/Comment");


//get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  if (!users) {
    return res.status(404).json({ msg: 'No users found' });
  }
  res.status(200).json(users);
});


//get a single user
router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
    res.status(200).json(user);
  });


// create & save a new user
router.post("/", async (req, res) => {
    const user = new User({
      name: req.body.name,
      profImage: req.body.profImage,
      comments: req.body.comments,
    });
    await user.save().then((data) => {
      res.send({ msg: "user created successfully!", user: data });
    });
  });

module.exports = router;
