const express = require("express");
const router = express.Router();
const Guestbook = require("../models/Guestbook")
const User = require("../models/User")

//Damit man auf die Sessions Collection zugreifen kann
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

router.get("/", (req,res,next)=>{
  Guestbook.find({})
  .populate("user")
  .then(guestbook=>{
    res.json(guestbook);
  })
})


router.post("/create", (req,res,next)=>{
 /*  console.log("entrie gotten" ,req.body) */
  console.log(req.body)
  Guestbook.create({
    title: req.body.title,
    entrie: req.body.entrie,
    user: req.body.user
  })
    .then(project => {
      res.json(project);
    })
})

//Hier wird die read only Collection Sessions in die Variable Test gespeichert
const Test = mongoose.model('Session', new Schema(), 'sessions');




module.exports = router;