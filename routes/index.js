const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log("YOU ARE IN THE INDEX ROUTE!")
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

module.exports = router;
