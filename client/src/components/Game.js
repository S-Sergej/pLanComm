import React, { Component } from 'react'
import GameForm from "./GameForm"

export default class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game Site</h1>
        <GameForm />
        <div className="card-container">
          <div className="card">
          <div className="front">Hier ist Vorne</div>
          <div className="back">Hier ist Hinten</div>
          </div>
        </div>
      </div>
    )
  }
}
