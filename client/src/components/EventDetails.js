import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-dropdown';


export default class Event extends Component {

  state={
    owner: null,
    user: this.props.user,
    eventname: "",
    eventdate: null,
    description: "",
    games: [],
    ownername: this.props.username,
    event: "",
    subscriber: [],
  }

  changeFormEntry=(event)=>{
    event.preventDefault()
    let{name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  componentDidMount(){
    axios.get(`/api/event/${this.props.match.params.eventId}`)
    .then(res => {
      this.setState({
        event: res.data,
        subscriber: res.data.subscriber
      })
    })
  }

  subscribe=(event)=>{
    event.preventDefault()
    axios.post(`/api/event/${this.props.match.params.eventId}/subscribe`, {
      user: this.state.user,
      subscriber: this.state.subscriber
    })
    .then(res=> {
      this.setState({
        eventname: "",
        description: ""
      })
    })
  }


  unsubscribe=(event)=>{
    event.preventDefault()
    axios.post(`/api/event/${this.props.match.params.eventId}/unsubscribe`, {
      user: this.state.user,
      subscriber: this.state.subscriber
    })
    .then(res=> {
      this.setState()
    })
  }

  delete=(event)=>{
    event.preventDefault()
    axios.post(`/api/event/${this.props.match.params.eventId}/delete`, {
      user: this.state.user,
    })
    .then(res => {
      console.log("Event deleted", res)
      this.setState()
    })
  }

  render() {
    console.log("MEIN EVEEEEENT>>>>>>>>",this.state.event)
    return (
      <div> 
        <h1>{this.state.event.eventname}</h1>
        <p>{new Date(this.state.event.eventdate).toLocaleDateString()}</p>
        <p>Begin at: {new Date(this.state.event.eventdate).toLocaleTimeString()}</p>
        <p>Description:</p>
        <h4 style={{color: "green"}}>{this.state.event.description}</h4>
        <p>created by: {this.state.event.ownername}</p>
        <p>subscribed for event: {this.state.subscriber.map(oneSubscriber=><div>{oneSubscriber.username}</div>)}</p>
        <button style={{color: "blue"}} onClick={this.subscribe}>subscribe</button>
        <button style={{color: "red"}} onClick={this.unsubscribe}>unsubscribe</button>
        <button style={{color: "black"}} onClick={this.delete}>delete Event</button>
      </div>
    )
  }
}

