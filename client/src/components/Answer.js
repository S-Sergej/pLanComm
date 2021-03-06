import React, { Component } from 'react'
import axios from "axios"
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Antwort extends Component {

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

  createAnswer=(event)=>{
    event.preventDefault()
    axios.post("/api/guestbook/answer", {
      title: this.state.title,
      description: this.state.description,
      user: this.state.user,
      guestbook: this.props.entryId
    })
    .then(res=>{
      this.setState({
        show: false,
        title: "",
        description: "",
        }, this.props.showAllEntries)
    })

  }
 
   //Methodas for the modal
   handleClose = () => {
    this.setState({
      show: false,
      title: "",
      description: "",
      
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
        <button  className="btn_guestbook" variant="primary" onClick={this.handleShow}><FontAwesomeIcon icon="pen" /> Reply  </button>
      <Modal style={{marginTop: "200px"}} show={this.state.show} onHide={this.handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Reply</Modal.Title>
        </Modal.Header>
          <Modal.Body >
          <form /* onSubmit={this.createAnswer} */ className="createGame">
          <div className="gameInputArrange">
          <label   htmlFor="title">Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.changeFormEntry}/>
          </div>
          <div className="gameInputArrange">
          <label  htmlFor="description">Reply </label>
          <textarea rows="8" name="description" onChange={this.changeFormEntry} defaultValue={this.state.description}></textarea>
          </div>
            
        </form>
         </Modal.Body>
        <Modal.Footer>
          <button className="modalButton" variant="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="times-circle" />
          </button>
          <button className="modalButton" variant="primary" onClick={this.createAnswer}>
          <FontAwesomeIcon icon="save" />
          </button>
        </Modal.Footer>
      </Modal>
      
    
      </div>

    )
  }
}

