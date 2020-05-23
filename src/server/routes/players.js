const express = require('express');
const router  = express.Router();
const User = require("../models/User")

/* GET home page */
router.get('/all', (req, res, next) => {
  User.find()
  .then(allUser=>{
    res.json(allUser)
  })
});

module.exports = router;
