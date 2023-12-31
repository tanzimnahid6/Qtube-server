const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  isLiked: {
    type: Boolean,
    enum: [true, false],
    default: false,
  },
});

const User = mongoose.model("users", userSchema );
module.exports = User;
