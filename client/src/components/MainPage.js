import React, { Component } from 'react'
import Event from './Event'
import Players from './Players'
import { Transition, animated } from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

export default class MainPage extends Component {
  state = {
    events : [],
    showDiv: true,
    buttonText: false
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

  render () {
    return (
      <div>
        <Event allEvents={() => this.getAllEvents()} />
        <div className='gameArrange'>
          {this.state.events.map(oneEvent => (
            <a href= {`/event/${oneEvent._id}`} >
            <div key={oneEvent._id} >
              <div className='EventData'>
                <div>
                <p><h3>{new Date(oneEvent.eventdate).toLocaleDateString()}</h3></p>
                  <h1>{oneEvent.eventname}</h1>
                  <p>Start at: {new Date(oneEvent.eventdate).toLocaleTimeString()}</p>
                  <p>participants: {oneEvent.subscriber.length}</p>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
        <div className='alignPlayerShow'>
          {this.state.buttonText ? (
            <button className='userButton' onClick={this.showDiv}>
              Show
              <FontAwesomeIcon icon='users' />
            </button>
          ) : (
            <button onClick={this.showDiv}>
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
      </div>
    )
  }
}
