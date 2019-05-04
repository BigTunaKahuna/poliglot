const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/users");
require("../config/passport")(passport);
// @POST
// @/api/auth/login
// @PUBLIC
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.cookie("id", req.session.passport.user);
  res.send(req.session.passport.user).status(200);
});

// @POST
// @/api/auth/logout
// @PRIVATE
router.get("/logout", (req, res) => {
  res.clearCookie("connect.sid");
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
