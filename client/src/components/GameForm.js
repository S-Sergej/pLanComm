import React, { Component } from 'react'
import axios from "axios"
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class GameForm extends Component {

  state={
    title: "",
    genre: "",
    description: "",
    show: false
  }

  //to get all changed entries
  changeFormEntry=(event)=>{
    event.preventDefault()
    console.log(event.target)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  /* Post Method to create new Game */
  createGame=(event)=>{
    event.preventDefault()
    console.log(this.state)

    axios.post("/api/game/create", this.state)
    .then(res=>{
      this.setState({
        title: "",
        description: "",
        genre: ""
      }, ()=>this.props.displayForm())
    })
    
  }

   //Methodas for the modal
   handleClose = () => {
    this.setState({
      show: false,
      title: "",
      entrie: ""
    })
  };
  handleShow = () => {
    this.setState({
      show: true
    })
  };


  render() {
    return (
      <div className="guestbookForm">
        <button variant="primary" onClick={this.handleShow}>Add New Game <FontAwesomeIcon icon="address-card" /></button>
      <Modal  show={this.state.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Game</Modal.Title>
        </Modal.Header>
          <Modal.Body >
          <form onSubmit={this.createGame}>
          <div>
          <label htmlFor="title">Titel: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.changeFormEntry}/>
          </div>
          <div>
          <label>Game Picture: </label>
          <input type="text" />
          </div>
          <div>
          <label htmlFor="description">Description </label>
          <textarea name="description" onChange={this.changeFormEntry} defaultValue={this.state.description}></textarea>
          </div>
                 
        </form>
          </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="times-circle" />
          </button>
          <button variant="primary" onClick={this.createGame}>
          <FontAwesomeIcon icon="save" />
          </button>
        </Modal.Footer>
      </Modal>
      
    
      </div>

    )
  }
}

