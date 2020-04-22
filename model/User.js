//FILENAME : User.js

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

  // Premilinary user info
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },

  // in-game user info
  playedGames: {
    type: Number,
    default: 0
  },
  mmr: {
    type: Number,
    default: 1000,
  },
  win_count: {
    type: Number,
    default: 0
  },
  loss_count: {
    type: Number,
    default: 0,
  },
  wl_ratio: {
    type: Number,
    default: 0,
  },

});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);