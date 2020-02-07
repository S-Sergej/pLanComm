import React, { Component } from 'react'
import axios from "axios"


export default class Playerdetails extends Component {
  
  state={
    username: "",
    createdAt: "",
    avatarURL: ""
  
  }

  getPlayer=()=>{
    axios.get(`/api/guestbook/player/${this.props.playerId}`)
    .then(res=>{
      this.setState({
        username: res.data.username,
        createdAt: res.data.createdAt,
        avatarURL: res.data.avatarURL
      })
    })
  }

  componentDidMount=()=>{
    this.getPlayer()
  }

  render() {

    const datum= new Date(this.state.createdAt)
    const d= datum.toLocaleDateString()
    console.log(this.state)
        return (
      <div>
        <h1 style={{color: "black"}}>Player {this.state.username}</h1>
        <h1 style={{color: "black"}}>Mitglied seit {d}</h1>
      </div>
    )
  }
}
