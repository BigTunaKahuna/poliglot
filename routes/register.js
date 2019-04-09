const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/users");
const router = express.Router();

// @POST
// @/api/register
// @PUBLIC
router.post("/", [], (req, res) => {
  const { userName, password, confPassword, email } = req.body;

  userName = userName.trim().escape();
  password = password.isLength({ min: 5 });
  email = email
    .trim()
    .isEmail()
    .normalizeEmail();

  if (!userName || !password || !confPassword || !email) {
    return res.status(400).json({ message: "Introduceti toate campurile" });
  }

  if (password !== confPassword) {
    return res.status(400).json({ message: "Parolele nu coincid" });
  }

  User.findOne({ $or: [{ email: email }, { userName: userName }] })
    .then(user => {
      if (user) {
        return res
          .status(400)
          .json({ msg: "User-ul sau email-ul sunt deja utilizate." });
      }

      const newUser = new User({
        userName,
        password,
        confPassword,
        email
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(
          (newUser.password, newUser.confPassword),
          salt,
          (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.confPassword = hash;
            newUser.save().then(user => {
              res.json({
                user: {
                  userName: userName,
                  email: email
                }
              });
            });
          }
        );
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
