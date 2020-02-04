import React, { Component } from 'react'
import Playerdetails from "./Playerdetails"
import { Link } from "react-router-dom";
import axios from "axios"

export default class Players extends Component {
  state={
    players: []
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
    console.log(this.state.players)
    return (
      <div>
        <h1>Playerslist</h1>
          {this.state.players.map(onePlayer=><div key={onePlayer._id}><Link to="/playerdetail">{onePlayer.username}</Link></div>)}

      </div>
    )
  }
}
