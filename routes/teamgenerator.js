const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Event = require("../models/Event")




router.post('/:eventId/:teamscount', (req, res, next) => {
  Event.findById(req.params.eventId)
    .populate("subscriber")
    .then(event => {
      const namesArray = event.subscriber.map(user => {
        return user.username})
      const random = generateRandomTeams(namesArray, req.params.teamscount)
      console.log("Event response:",event.subscriber[0].username)
      Event.findByIdAndUpdate(req.params.eventId, {teams: random})
      .then(updatedEvent => res.json(updatedEvent))
    })
    .catch(err => console.log('ALL EVENTS FROM FRONT >>>>>>>>', err))
})



function generateRandomTeams(subscribersArray, teamscount) {
  //console.log("Show me te subscribers here", subscribersArray, teamscount)
  if (subscribersArray.length < 2) return subscribersArray;
  const teams = [[]];
  const membersInTeam = Math.ceil(subscribersArray.length / teamscount);
  console.log(membersInTeam)
  const randoms = shuffleArray([...subscribersArray])
  let teamIndex = 0;
  for (let user of randoms) {
    if(teams[teamIndex].length >= membersInTeam){
      teams.push([])
      teamIndex++;
    }
    teams[teamIndex].push(user)
  }
  
   return teams;
}


 
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;

  }
  return array
}


module.exports = router