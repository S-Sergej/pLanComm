const express = require('express')
const router = express.Router()
const Game = require('../models/Game')
const User = require('../models/User')
const Event = require('../models/Event')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

router.get('/', (req, res, next) => {
  Event.find()
    .populate('subscriber')
    .populate('games')
    .then(allEvents => {
      res.json(allEvents)
    })
})

router.post('/', (req, res, next) => {
  const eventname = req.body.eventname
  const eventdate = req.body.eventdate
  const description = req.body.description
  const games = []
  const ownerid = req.user._id
  const ownername = req.user.username
  const subscriber = [ownerid]

  Event.create({
    eventname,
    eventdate,
    games,
    description,
    ownerid,
    ownername,
    subscriber
  })
    .then(event => res.json(event))
    .catch(err => console.log(err))
})

router.get('/:eventId', (req, res, next) => {
  Event.findById(req.params.eventId) // check in expresss where is the param
    .populate('subscriber')
    .populate('games')
    .then(event => {
      res.json(event)
    })
})

router.post('/:eventId', (req, res, next) => {
  const games = req.body.games
  Event.findByIdAndUpdate(req.params.eventId, { games }, { new: true })
    .then(event => {
      res.json(event)
    })
    .catch(err => console.log('EVENT Game change Error >>>>>>>>>', err))
})

router.post('/:eventId/subscribe', (req, res, next) => {
  const newSubscriber = req.body.user._id
  Event.findById(req.params.eventId, (err, theEvent) => {
    if (theEvent.subscriber.includes(newSubscriber)) {
      res.json(theEvent)
    } else {
      theEvent
        .update({ $push: { subscriber: newSubscriber } })
        .then(theEvent => {
          res.json(theEvent)
        })
        .catch(error => {
          next(error)
        })
    }
  })
})

router.post('/:eventId/unsubscribe', (req, res, next) => {
  const currentSubscriber_id = req.body.user._id

  Event.findById(req.params.eventId, (err, theEvent) => {
    const updatedSubscriber = theEvent.subscriber.filter(
      subscriber => subscriber._id != currentSubscriber_id
    )
    theEvent
      .update({ subscriber: updatedSubscriber })
      .then(theEvent => {
        res.json(theEvent)
      })
      .catch(error => {
        next(error)
      })
  })
})

router.get('/game/:gameId', (req, res, next) => {
  Game.findById(req.params.gameId)
    .then(game => {
      res.json(game)
    })
})

router.post('/:eventId/addgame', (req, res, next) => {
  const newGame = req.body.games
  console.log("BACKEND",req.body.games)
  console.log("PARAMS>>>",req.params.eventId)
  Event.findById(req.params.eventId, (err, theEvent) => {
    if (theEvent.games.includes(newGame)){
      res.json(theEvent)
    } else {
    theEvent
    .update({$push: {games: newGame}})
    .then(theEvent => {
      res.json(theEvent)
      })
    .catch(error => {
      next(error)
      })
    }
  })
})

//Delete added Game on Event
router.post('/:eventId/deletegame', (req, res, next) => {
  const currentGameId = req.body.games
  Event.findById(req.params.eventId, (err, theEvent) => {
    const updatedGames = theEvent.games.filter(
      games => games._id != currentGameId
    )
    theEvent
    .update({games: updatedGames})
    .then(theEvent => {
      res.json(theEvent)
    })
    .catch(error => {next(error)})
  })
})

router.post('/:eventId/delete', (req, res, next) => {
  const current_user_id = req.body.user._id
  Event.findById(req.params.eventId, (err, theEvent) => {
    if (theEvent.ownerid == current_user_id) {
      theEvent
        .remove({ _id: req.params.id })
        .then(theEvent => {
          res.json(theEvent)
        })
        .catch(error => {
          next(error)
        })
    } else {
      res.json(theEvent)
    }
  })
})

module.exports = router
