const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    profImage: String,
    comments: Array,
});

module.exports= User = mongoose.model('User', UserSchema);