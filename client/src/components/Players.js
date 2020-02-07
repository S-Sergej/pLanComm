import React, { Component } from 'react'
import Playerdetails from "./Playerdetails"
import { Link } from "react-router-dom";

import axios from "axios"

export default class Players extends Component {
  state={
    players: [],
   
  }

  getPlayers=()=>{
    axios.get("/api/players/all")
    .then(res=>{
      this.setState({
        players: res.data
      })
    })
    .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.getPlayers();
  }

  render() {
    console.log(this.state.visibility)
    return (
      <div>
        <div className="alignUsers">
           {this.state.players.map(onePlayer=>
          
  <div className="playerCard" key={onePlayer._id} >
    
  <img style={{width: "50px"}}src={onePlayer.avatarURL} alt={onePlayer.username} />
  <p style={{color: "black"}}>{onePlayer.username}</p>
  </div>)}
         </div>
      </div>
    )
  }
}
