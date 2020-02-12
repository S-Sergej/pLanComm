import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Game from './Game';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';


export default class Event extends Component {

  state={
    owner: null,
    user: this.props.user,
    eventname: "",
    eventdate: null,
    description: "",
    ownername: this.props.username,
    event: "",
    subscriber: [],
    games: [],
    oneGame: "",
    eventGames: [],
    checked: false,
  }

  changeFormEntry=(event)=>{
    event.preventDefault()
    let{name, value} = event.target
    this.setState({
      [name] : value
    })
  }

  componentDidMount(){
    this.extraMethodGetEvent()
  }

  extraMethodGetEvent(){
    axios.get(`/api/event/${this.props.match.params.eventId}`)
    .then(res => {
      this.setState({
        event: res.data,
        subscriber: res.data.subscriber,
        eventGames: res.data.games,
        owner: res.data.ownerid,
      }, this.getAllGames())
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
      this.setState()
    })
  }

  getAllGames=()=>{
    axios.get('/api/game/allGames').then(res => {
      this.setState({
        games: res.data
        })
    })
  }

  dropDownOnChange=(event)=>{
    event.preventDefault()
    this.setState({
      oneGame: event.target.value
    })
    console.log("dropdownChange>>>>>>>>>>>",event.target.value)
  }

  addgame=(event)=>{
    event.preventDefault()
    axios.post(`/api/event/${this.props.match.params.eventId}/addgame`, {
      user: this.state.user,
      games: this.state.oneGame,
    })
    .then(res =>{
      this.setState({checked: true})
      this.extraMethodGetEvent()
    })  
  }

  deletegame=(oneGame)=>{
    //event.preventDefault()
    axios.post(`/api/event/${this.props.match.params.eventId}/deletegame`,{
      games: oneGame,
    })
    .then(res => {
      this.extraMethodGetEvent()
    })
  }

  render() {
    return (
      <div> 
        <h1>{this.state.event.eventname}</h1>
        <p>{new Date(this.state.event.eventdate).toLocaleDateString()}</p>
        <p>Begin at: {new Date(this.state.event.eventdate).toLocaleTimeString()}</p>
        <p>Description:</p>
        <h4 style={{color: "green"}}>{this.state.event.description}</h4>
        <p>created by: {this.state.event.ownername}</p>
        <p>subscribed for event: {this.state.subscriber.map(oneSubscriber=><div>{oneSubscriber.username}</div>)}</p>

        <div className="Games">
        <p>Event Games:</p><p>{this.state.eventGames.map(oneGame=>
        <div>{oneGame.title}
          {(this.state.owner === this.state.user._id) ? <button onClick={()=>this.deletegame(oneGame._id)}>delete</button> : null}
        </div>)}
        </p>

        {/* Dropdown 4 games */}
        <select onChange={this.dropDownOnChange} >
          {this.state.games.map(oneGame=><option key={oneGame._id} value={oneGame._id}>{oneGame.title}</option>)}
          <option selected={this.state.checked}>choose a game</option>
        </select>
          <button style={{color: "purple"}} onClick={this.addgame}>Add the Game</button>
        </div>

        <button style={{color: "blue"}} onClick={this.subscribe}>subscribe</button>
        <button style={{color: "red"}} onClick={this.unsubscribe}>unsubscribe</button>
        <button style={{color: "black"}} onClick={this.delete}>delete Event</button>
      </div>
    )
  }
}

