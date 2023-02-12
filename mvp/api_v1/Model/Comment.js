const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  creator: String,
  body: String,
  upvotes: Number,
  userprofile: String,
  time: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = Comment = mongoose.model("Comment", CommentSchema);
