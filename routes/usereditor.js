const express = require('express');
const router = express.Router();
const User = require("../models/User")
const uploadAvatarCloud = require("../configs/cloudinary");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

router.get('/:id', (req, res) => {
  User.findOne({_id: req.user._id})
  .then(theUser => {
  res.json(theUser);
  })
});


router.post('/upload', uploadAvatarCloud.single('avatarURL'),
  (req, res, next) => {
    const avatarURL = req.file.secure_url;
    console.log("UPLOAAAAAAAAAD", avatarURL)
    User.findOneAndUpdate({ _id: req.user._id }, {avatarURL})
      .then(user => {
        res.json(avatarURL);
      })
      .catch(error => {
        console.log(error);
      });
  }); 



  router.post('/update',
  (req, res, next) => {
    const {avatarURL} = req.body
    console.log("UUUUUUUUPPDATEEEEEE", avatarURL)
    User.findOneAndUpdate({ _id: req.user._id }, {avatarURL})
      .then(user => {
        res.json(user);
      })
      .catch(error => {
        console.log(error);
      });
  }); 



module.exports = router;