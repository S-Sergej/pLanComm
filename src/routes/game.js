const express = require('express');
const router = express.Router();
const Game = require("../models/Game")
const User = require("../models/User")

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


router.get("/allGames" ,(req,res,next)=>{
  Game.find({})
  .then(allGames=>{
    res.json(allGames)
  })
})


router.post('/create', (req, res, next) => {
  const{title, genre, description, user} = req.body
  Game.create({
    title: title,
    genre: genre,
    description: description,
    user: user
  })
  .then(game=>res.json(game))


  }); 





module.exports = router;