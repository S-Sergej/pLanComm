import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Event extends Component {

  state={
    eventname: "",
    eventdate: "",
    description: "",
    games: [],
    ownername: this.props.username,
    subscribers: [],
  }

  changeFormEntry=(event)=>{
    console.log("TEST>>", event.target)
    event.preventDefault()
    let{name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  createEvent=(event)=>{
    event.preventDefault()
    axios.post("/api/event/", {
      eventdate: this.state.eventdate,
      eventname: this.state.eventname,
      description: this.state.description,
      ownername: this.state.username
    })
    .then(res=>{
      this.setState({
        eventname: "",
        description: "",
        eventdate: ""
      }, this.props.allEvents(), this.props.handleCloseModal())
    })
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createEvent} className="createEvent">
        <button type='submit'>Send</button>
          <label htmlFor="eventdate">Schedule:</label>
          <input type="datetime-local" name="eventdate" value={this.state.eventdate} onChange={this.changeFormEntry} required />
          <label htmlFor="eventname">Event Name: </label>
          <input type="text" name="eventname" value={this.state.eventname} onChange={this.changeFormEntry} required/>
          <label htmlFor="description">Event Description: </label>
          <input type="text" name="description" value={this.state.description} onChange={this.changeFormEntry}/>
        </form>
      </div>
    )
  }
}

