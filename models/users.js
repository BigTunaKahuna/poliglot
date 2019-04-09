const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  confPassword: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  score: { type: Number, default: 0 },
  message: [{ id: Number, title: String, body: String }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
