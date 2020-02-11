const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Event = require("../models/Event")




router.get('/:teamscount/:eventID', (req, res) => {
  Event.findById(req.param.eventID)
    .then(event => {
     const teams = generateRandomTeams(event.subscribers, req.params.teamscount)
     res.json(teams)
    })
    .catch(err=> console.log(err))
});

function generateRandomTeams(subscribersArray, teamscount) {
  if (subscribersArray.length < 2) return []
  const teams = [[]];
  const membersInTeam = Math.floor(subscribersArray.length / teamscount);
  const random = shuffleArray([...subscribersArray])
  for (let user of random) {
    const teamIndex = teams.findIndex(team => team.length < membersInTeam)
    if (teamIndex === -1) {
      teams.push([]);
      teamIndex = teams.length - 1;
    }
    teams[teamIndex].push(user)
    return teams;
  }


  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}