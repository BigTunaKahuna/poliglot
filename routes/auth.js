const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/users");
require("../config/passport")(passport);
// @POST
// @/api/auth/login
// @PUBLIC
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/fail",
    successRedirect: "/success"
  }),
  (req, res) => {
    res.redirect("/success");
  }
);

// @POST
// @/apit/auth/logout
// @PRIVATE
router.get("/logout", (req, res) => {
  res.clearCookie("connect.sid");
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
