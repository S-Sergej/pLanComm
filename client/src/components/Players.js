import React, { Component } from 'react'
import Playerdetails from "./Playerdetails"
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios"

export default class Players extends Component {
  state={
    players: [],
    playerId: "",
    showPlayer:false,
    show: false,
   
  }

  //get All registered Users
  getPlayers=()=>{
    axios.get("/api/players/all")
    .then(res=>{
      this.setState({
        players: res.data
      })
    })
    .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.getPlayers();
  }

  
  showPlayerDetails(playerId){
    this.setState({
      showPlayer: !this.state.showPlayer,
      playerId: playerId,
      show: true
    })
  }

   //Methodas for the modal
   handleClose = () => {
    this.setState({
      show: false,
    })
  };
  handleShow = () => {
    this.setState({
      show: true
    })
  };


  render() {
        return (
      <div>
        <div className="alignUsers">
           {this.state.players.map(onePlayer=>
          
  <div className="playerCard" key={onePlayer._id} onClick={()=>this.showPlayerDetails(onePlayer._id)}>
    
  <img style={{width: "60px"}}src={onePlayer.avatarURL} alt={onePlayer.username} />
  <p style={{color: "black"}}>{onePlayer.username}</p>
  </div>)}
         </div>

            
      
        <Modal  show={this.state.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Player Details</Modal.Title>
        </Modal.Header>
          <Modal.Body >
          <Playerdetails playerId={this.state.playerId}  />
          </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="times-circle" />
          </button>
          </Modal.Footer>
      </Modal>
      
      
      </div>
    )
  }
}
