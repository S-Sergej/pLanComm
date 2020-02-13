import React, { Component } from 'react'
import axios from "axios"


export default class Playerdetails extends Component {
  
  state={
    username: "",
    createdAt: "",
    avatarURL: "",
    
  
  }

  getPlayer=()=>{
    axios.get(`/api/guestbook/player/${this.props.playerId}`)
    .then(res=>{
      this.setState({
        username: res.data.username,
        createdAt: (new Date(res.data.createdAt)).toLocaleDateString(),
        avatarURL: res.data.avatarURL
      })
    })
  }

  componentDidMount=()=>{
    this.getPlayer()
  }

  render() {

    /* const datum= new Date(this.state.createdAt)
    const d= datum.toLocaleDateString() */
    
        return (
      <div className="playerModal" >
        <img  src={this.state.avatarURL} alt={this.state.username} />
        <h2 style={{color: "white"}}>Player </h2><h4 style={{color: "white"}}>{this.state.username}</h4>
        <h2 style={{color: "white"}}>Mitglied seit </h2><h4 style={{color: "white"}}>{this.state.createdAt}</h4>
      </div>
    )
  }
}
