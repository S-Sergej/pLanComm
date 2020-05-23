import React, { Component } from 'react'
import { Alert, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import axios from "axios"
import UserEditor from "./UserEditor"
import Modal from 'react-bootstrap/Modal';


export default class UserProfil extends Component {
  constructor(props){
    super(props);
    this.state={
      username: this.props.user.username,
      avatarUrl: this.props.user.avatarURL,
      email: this.props.user.email,
      usertype: this.props.user.userType,
      createdAt: (new Date(this.props.user.createdAt)).toLocaleDateString(),
      show: false,
      notify: this.props.user.notify,
    }
  }

  //Methode um die Userinfos zu holen
  getUserProfile = () =>
  {
    axios.get(`/api/usereditor/${this.props.user._id}`)
    .then(res =>{
      this.setState({avatarURL: res.data.avatarURL, notify: res.data.notify})
    })
  }

    //Methodas for the modal
    handleClose = () => {
      this.setState({
        show: false,
                
      }, this.getUserProfile())
    };

    handleShow = () => {
      this.setState({
        show: true
      })
    };


    //Method for notifier checkbox
    toggleChange = () => {
      axios.post(`api/usereditor/${this.props.user._id}/notify?notifyX=${!this.state.notify}`)
      .then(res =>{
        this.setState({
          notify: !res.data.notify,
        })
      },this.getUserProfile())
    }

    //Hiermit werden die UserDaten geholt sobald die Komponente gerendert wird
  componentDidMount() 
  {this.getUserProfile()}

  render() {
     
    return (
      <div className="UserProfil">
        <div>
          <img style={{backgroundColor: "white"}}src={this.state.avatarURL} alt="userbild" />
          
        <button className="btn_guestbook" onClick={this.handleShow}>Edit Avatar</button>
          {/* Hier ist der alternative Link zum editieren des User Avatar */}
          {/* <Link to="/usereditor">Edit Avatar <FontAwesomeIcon icon="user-edit" /></Link> */}
        </div>
        
        <div className="userProfilData">
        <h2>Username:</h2><input type="text" value={this.state.username} disabled />
        <h2>Email:</h2><input type="text" value={this.state.email} disabled />
        <h2>Mitglied seit:</h2><input type="text" value={this.state.createdAt} disabled />
        <h2>Usertype: </h2><input type="text" value={this.state.usertype} disabled />
        <h2>Event Reminder</h2> <input type="checkbox" checked={this.state.notify} onChange={this.toggleChange}></input>
        </div>

{/* Modal zum Ändern des User Avatar */}
        <Modal style={{marginTop: "100px"}} show={this.state.show} onHide={this.handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Change your Avatar</Modal.Title>
        </Modal.Header>
          <Modal.Body >
          {/* Hier ist die UserEdit Komponente */}
          <UserEditor username={this.props.user.username} handleClose={this.handleClose} getUserProfile={this.getUserProfile}/>

         </Modal.Body>
       </Modal>
      
        
        
        
      </div>
    )
  }
}
