import React, { Component } from 'react'
import Event from './Event'
import Players from './Players'
import { Transition, animated } from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal';
import {Spring} from 'react-spring/renderprops'
import axios from 'axios'


export default class MainPage extends Component {
  state = {
    events : [],
    showDiv: true,
    buttonText: false,
    show: false,
  }

  showDiv = () => {
    this.setState({
      showDiv: !this.state.showDiv,
      buttonText: !this.state.buttonText
    })
  }

  getAllEvents = () => {
    axios.get('/api/event/').then(res => {
      console.log(res);
      this.setState({
        events: res.data
        })
    })
  }

  componentDidMount () {
    this.getAllEvents()
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



  render () {
    return (
      <div className="Mainpage">
      
      {/* Hier ist die Sidebar für die Anzeige der registrierten User */}
      <div className='alignPlayerShow'>
          {this.state.buttonText ? (
            <Spring
            from={{opacity: 0.3}}
            to={{opacity:1}}
            config={{duration: 600}}>
              {props => <div style={props}>
            <button className='userButton' onClick={this.showDiv}>
              Show
              <FontAwesomeIcon icon='users' />
            </button>
            </div>}
            </Spring>
          ) : (
            
            <button className='userButton hide' onClick={this.showDiv}>
              Hide <FontAwesomeIcon icon='users' />
            </button>
            
          )}
          <Transition
            native
            items={this.state.showDiv}
            from={{ marginLeft: -200 }}
            enter={{ marginLeft: 0 }}
            config={{ delay: 100, duration: 600 }}
            leave={{ marginLeft: -200 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <Players />
                </animated.div>
              ))
            }
          </Transition>
        </div>
      
        {/* Modal für das Formular zum Erstellen von Events */}
        <div className="event_basic">
        <button  className="btn_event" variant="primary" onClick={this.handleShow}><FontAwesomeIcon icon="pen" /> Create Event  </button>
      <Modal style={{marginTop: "200px"}} show={this.state.show} onHide={this.handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
          <Modal.Body >
              {/* Hier ist das Formular für die Events */}
          <Event allEvents={() => this.getAllEvents()} handleCloseModal={this.handleClose}/>
         </Modal.Body>
        
      </Modal>
      

       {/* Hier stehen dann die Events */}
        <div className='eventArrange'>
      
          {this.state.events.map(oneEvent => (
            <div key={oneEvent._id} className="singleEvent">
            <a href= {`/event/${oneEvent._id}`} >
            
                  <h3>{new Date(oneEvent.eventdate).toLocaleDateString()}</h3>
                  <h1>{oneEvent.eventname}</h1>
                  <p>Start at: {new Date(oneEvent.eventdate).toLocaleTimeString()}</p>
                  <p>participants: {oneEvent.subscriber.length}</p>
           
          </a>
          </div>
          ))}
        </div>
        </div>

        
      </div>
    )
  }
}
