import React, { Component } from 'react'
import axios from "axios"
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class GameForm extends Component {

  state={
    title: "",
    description: "",
    show: false,
    user: this.props.user
  }

  //to get all changed entries
  changeFormEntry=(event)=>{
    event.preventDefault()
    let{name, value} = event.target
    this.setState({
      [name] : value
    })
  }


  //Create Game

  createGame=(event)=>{
    event.preventDefault()
    axios.post("/api/game/create", {
      title: this.state.title,
      description: this.state.description,
      user: this.state.user
    })
    .then(res=>{
      this.setState({
        show: false,
        title: "",
        description: "",
        }, this.props.allGames())
    })

  }
 
   //Methodas for the modal
   handleClose = () => {
    this.setState({
      show: false,
      title: "",
      description: "",
      genre:""
    })
  };
  handleShow = () => {
    this.setState({
      show: true
    })
  };


  render() {
    
    return (
      <div >
        <button className="btn_guestbook" variant="primary" onClick={this.handleShow}>Add New Game  <FontAwesomeIcon icon="gamepad" /></button>
      <Modal style={{marginTop: "300px"}} show={this.state.show} onHide={this.handleClose} animation={true} >
        <Modal.Header closeButton>
          <Modal.Title>New Game</Modal.Title>
        </Modal.Header>
          <Modal.Body >
          <form onSubmit={this.createGame} className="createGame">
          <div className="gameInputArrange">
          <label htmlFor="title">Titel: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.changeFormEntry}/>
          </div>
          <div>
          <label className="gameInputArrange" htmlFor="description">Description </label>
          <textarea rows="5" name="description" onChange={this.changeFormEntry} defaultValue={this.state.description}></textarea>
          </div>
                 
        </form>
          </Modal.Body>
        <Modal.Footer>
          <button className="modalButton" variant="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="times-circle" />
          </button>
          <button  className="modalButton"variant="primary" onClick={this.createGame}>
          <FontAwesomeIcon icon="save" />
          </button>
        </Modal.Footer>
      </Modal>
      
    
      </div>

    )
  }
}

