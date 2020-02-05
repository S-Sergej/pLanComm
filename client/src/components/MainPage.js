import React, { Component } from 'react'
import Event from "./Event"
import Players from "./Players"

export default class MainPage extends Component {
  render() {
    
    return (
      <div>
        <h1>Welcome to MainPage</h1>
        <Event />
        <Players />
      </div>
    )
  }
}
