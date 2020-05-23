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

        {/* hier werden alle registered User aufgelistet */}
        <div className="alignUsers">
          
           {this.state.players.map(onePlayer=>
          
           <div className="playerCard" key={onePlayer._id} onClick={()=>this.showPlayerDetails(onePlayer._id)}>
    
           <img src={onePlayer.avatarURL} alt={onePlayer.username} />
           <p >{onePlayer.username}</p>
        </div>)}
         </div>

            
      
        <Modal show={this.state.show} onHide={this.handleClose} animation={true} keyboard={true} autoFocus={true} backdrop={false} size="xL">
        <Modal.Header className="playerDetails">
        <Playerdetails playerId={this.state.playerId}  />
        
        </Modal.Header>
         <Modal.Footer className="playerDetailsFotter">
          <button className="modalButton" variant="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="times-circle" />
          </button>
          </Modal.Footer>
      </Modal>
      
      
      </div>
    )
  }
}
