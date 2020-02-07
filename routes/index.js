const express = require('express');
const router  = express.Router();
const path = require('path')

/* GET home page */
router.get('/', (req, res, next) => {
  console.log("YOU ARE IN THE INDEX ROUTE!")
  res.render('index.html');
});

module.exports = router;
