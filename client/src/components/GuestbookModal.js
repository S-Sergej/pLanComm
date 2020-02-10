import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios"

export default class GuestbookModal extends Component {


    state={
      title: "",
      entrie: "",
      show: false,
      
    }

    //Method to get every Change that has been done in the form
    addEntrie=(event)=>{
      this.setState({[event.target.name] : event.target.value})
    }
   
    //create Entrie in guestbook
    createEntrie=(event)=>{
      
      event.preventDefault();
      axios.post("/api/guestbook/create", {title: this.state.title, entrie: this.state.entrie, user: this.props.user._id})
      .then(response => {
       
        this.setState({
          entrie: "",
          title: "",
          show: false
          }, this.props.showAll());
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
      <div>
        <button className="btn_guestbook" onClick={this.handleShow}>Add Guestbook Entry <FontAwesomeIcon icon="address-card" /></button>
      <Modal  show={this.state.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Guestbook Entry</Modal.Title>
        </Modal.Header>
          <Modal.Body >
            <form className="guestbookForm">
              <div>
              <label htmlFor="title">Titel </label><input type="text" name="title" value={this.state.title} onChange={this.addEntrie} />
              <label htmlFor="entrie">Eintrag </label>
              </div>
              <div>
              <textarea cols="100" rows="5" name="entrie" value={this.state.entrie} onChange={this.addEntrie}></textarea>
              </div>

            </form>
          </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="times-circle" />
          </button>
          <button variant="primary" onClick={this.createEntrie}>
          <FontAwesomeIcon icon="save" />
          </button>
        </Modal.Footer>
      </Modal>
      
    
      </div>
    )
  }
}
