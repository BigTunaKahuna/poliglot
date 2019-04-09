const express = require("express");
const router = express.Router();
const { checkAuth } = require("../config/isAuth");
const User = require("../models/users");
const mongoose = require("mongoose");

// @PUT
// @api/message/add/:id
// @PRIVATE
router.put("/add/:id", checkAuth, (req, res) => {
  if (req["user"].id !== req.params.id) {
    return res
      .status(403)
      .json({ msg: "Nu sunteti logat cu user-ul dumneavoastra" });
  } else {
    User.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          message: { title: req.body.title, body: req.body.message }
        }
      },
      { new: true }
    )
      .select("-password -confPassword -score -email -_id -__v")
      .then((message, user) => {
        res.status(200).json(message);
      })
      .catch(err => console.log(err));
  }
});

// @GET
// @api/message/get/:id
// @PRIVATE
router.get("/get/:id", checkAuth, (req, res) => {
  if (req["user"].id !== req.params.id) {
    return res
      .status(403)
      .json({ msg: "Nu sunteti logat cu user-ul dumneavoastra" });
  } else {
    User.findById(req.params.id)
      .select("message")
      .then((message, user) => {
        res.status(200).json(message);
      })
      .catch(err => console.log(err));
  }
});

// @DELETE
// @api/message/delete/:id/:index
// @PRIVATE
router.put("/delete/:id/:index", checkAuth, (req, res) => {
  if (req["user"].id !== req.params.id) {
    return res
      .status(403)
      .json({ msg: "Nu sunteti logat cu user-ul dumneavoastra" });
  } else {
    User.findByIdAndUpdate(req.params.id, {
      $pull: { message: { _id: req.params.index } }
    })
      .then(message => {
        res.status(200).json(message);
      })
      .catch(err => console.log(err));
  }
});

// @EDIT
// @api/message/edit/:id/:index
// @PRIVATE
router.put("/edit/:id/:index", checkAuth, (req, res) => {
  User.findOneAndUpdate(
    { "message._id": req.params.index },
    {
      $set: {
        "message.$.title": req.body.title,
        "message.$.body": req.body.message
      }
    },
    { new: true }
  )
    .select("message")
    .then(user =>
      res.status(201).json({ msg: "Mesajul a fost editat cu succes." })
    )
    .catch(err => console.log(err));
});

module.exports = router;
