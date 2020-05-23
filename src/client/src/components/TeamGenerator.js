import React, { Component } from 'react'
import Axios from 'axios'

export default class TeamGenerator extends Component {
  state={
    _id : "",
    games : [],



  }
    componentDidMount(){
      Axios.get('api/event/:eventID')
      .then(event => this.setState({event}))
    }

  render() {
    return (
      <div>
        <h1>This will be the team generator</h1>

      </div>
    )
  }
}


