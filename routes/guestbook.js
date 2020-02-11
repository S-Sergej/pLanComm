const express = require("express");
const router = express.Router();
const Guestbook = require("../models/Guestbook")
const User = require("../models/User")
const Answer =require("../models/Answer")


//Damit man auf die Sessions Collection zugreifen kann
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

router.get("/", (req,res,next)=>{
  Guestbook.find({}).sort({createdAt: -1})
  .populate("user")
  .populate("answer")
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

//Hier wird die Antwort gepostet
router.post("/answer", (req,res,next)=>{
  
  const guestbookId=req.body.guestbook
  Answer.create({
    title: req.body.title,
    description: req.body.description,
    user: req.body.user,
    guestbook: req.body.guestbook
  })
  .then(answer => {
    return Guestbook.findByIdAndUpdate(guestbookId, {
      $push: { answer: answer._id }
    }).then(() => {
      res.json({
        message: `Task with id ${answer._id} was successfully added to project with id ${guestbookId}`
      });
    });
  })
})



//getting all Answers
router.get("/answer/:id", (req,res,next)=>{
  const id=req.params.id
  Answer.find({guestbook: id})
  .populate("user")
  .then(answer=>{
    console.log(answer)
    res.json(answer)})
})

//Hier wird die read only Collection Sessions in die Variable Test gespeichert
const Test = mongoose.model('Session', new Schema(), 'sessions');

router.delete("/delete/:id", (req,res,next)=>{
  const id=(req.params.id)
  Guestbook.findByIdAndDelete(id)
  .then(res=>console.log("has been deleted"))

})

router.get("/player/:id", (req, res, next)=>{
  User.findById(req.params.id)
  .then(oneUser=>{
    res.json(oneUser)
  })
})

module.exports = router;