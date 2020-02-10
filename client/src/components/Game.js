import React, { Component } from 'react'
import GameForm from "./GameForm"
import axios from "axios"

export default class Game extends Component {

  state={
    games : [],
    user: this.props.user,
    defaultImage: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Video-Game-Controller-Icon-IDV-green.svg"
  }

  getAllGames=()=>{
    axios.get("/api/game/allGames")
    .then(res=>{
      this.setState({
        games: res.data
      })
    }
      
    )
  }

  componentDidMount(){
    this.getAllGames()
  }

  render() {
    
    return (
      <div>
        <h1>Game Site</h1>
        <GameForm user={this.state.user} allGames={()=>this.getAllGames()}/>
      <div className="gameArrange">
          {this.state.games.map(oneGame=>
          <div key={oneGame._id}className="card-container">
                <div className="card">
                <div className="front"><h1>{oneGame.title}</h1><img src={this.state.defaultImage} alt="game"/></div>
                <div className="back"><p>{oneGame.description}</p></div>
                </div>
              </div>)}
        </div>
      </div>
    )
  }
}
