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
    teams: [],
    teamcount:0
  }

  // change handler for team creator
 handleTeamCountChange = (event) => {
this.setState({
  teamcount: event.target.value,
})}

teamGeneratorSubmit = (event) => {
  event.preventDefault()
  axios.post(`/api/teamgenerator/${this.props.match.params.eventId}/${this.state.teamcount}`, this.state.subscriber)
  .then(
    response => this.setState({
      teams: response.data.teams
    }, this.extraMethodGetEvent())
  )
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
        teams: res.data.teams
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
      },this.extraMethodGetEvent())
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
    },this.extraMethodGetEvent())
  }

  delete=(event)=>{
    event.preventDefault()
    axios.post(`/api/event/${this.props.match.params.eventId}/delete`, {
      user: this.state.user,
    })
    .then(res => {
      this.setState()
      this.props.history.push("/main")
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
      <div className="eventDetailsCard"> 
      <div className="eventCard">
        <h1>{this.state.event.eventname}</h1>
        <div className="time4Event">
        <p>Begin at: {new Date(this.state.event.eventdate).toLocaleDateString()} {new Date(this.state.event.eventdate).toLocaleTimeString()}</p>
        </div>
        <h4>Description:</h4>
        <p >{this.state.event.description}</p>
        <h4>created by:<p> {this.state.event.ownername}</p></h4>

      <div><h4>Subscriber</h4> {this.state.subscriber.map(oneSubscriber=><p key={oneSubscriber._id}>{oneSubscriber.username}</p>)}</div>

        <div >
         
        <h4>Event Games:</h4><p>{this.state.eventGames.map(oneGame=>
        <div className="Games">
          <p>{oneGame.title}</p>
          {(this.state.owner === this.state.user._id) ? <button className="btn_event deleteGame" onClick={()=>this.deletegame(oneGame._id)}><FontAwesomeIcon icon="eraser" /> delete</button> : null}
        </div>)}
        </p>
          

        {/* Dropdown 4 games */}
        <select onChange={this.dropDownOnChange} >
          {this.state.games.map(oneGame=><option key={oneGame._id} value={oneGame._id}>{oneGame.title}</option>)}
          <option selected={this.state.checked}>choose a game</option>
        </select>
          <button className="btn_event game" onClick={this.addgame}><FontAwesomeIcon icon="gamepad" /> Add the Game</button>
        </div>
        </div>   
        <button className="btn_event subscribe" onClick={this.subscribe}><FontAwesomeIcon icon="campground" /> subscribe</button>
        <button className="btn_event unsubscribe" onClick={this.unsubscribe}><FontAwesomeIcon icon="user-slash" /> unsubscribe</button>
        <button className="btn_event delete" onClick={this.delete}><FontAwesomeIcon icon="trash-alt" /> delete Event</button>
        
        <div className="createTeam">
        
          {this.state.teams.map(
            (oneTeam, index) => 
            (<div key = {Math.random()*(index+1)}><p> Team{index+1}: </p>
              {oneTeam.map((eachUser, index) =>
                 <span  key = {Math.random()*(index+1)}> {eachUser} </span>
                 )}
            </div>))}
        
        <form  onSubmit={this.teamGeneratorSubmit}>
        <button className="btn_event team" type="submit"><FontAwesomeIcon icon="users" /> Create Teams</button>
        <input type="number" name="teamcount" onChange={this.handleTeamCountChange} value ={this.state.teamcount} min="2" max="6"/>
        </form>
        </div>
      </div>
    )
  }
}

