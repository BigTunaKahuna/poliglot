const express = require("express");
const router = express.Router();
const { checkAuth } = require("../config/isAuth");
const User = require("../models/users");

// @GET
// @/api/profile/:id
// @PRIVATE
router.get("/:id", checkAuth, (req, res) => {
  User.findById(req.params.id)
    .select("-password -confPassword")
    .then(user => {
      res.json({ user });
    })
    .catch(err => console.log(err));
});

module.exports = router;
