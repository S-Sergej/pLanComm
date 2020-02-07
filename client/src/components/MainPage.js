import React, { Component } from 'react'
import Event from "./Event"
import Players from "./Players"
import {Transition, animated} from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class MainPage extends Component {

  state={
    showDiv: true,
    buttonText: false
}

showDiv=()=>{
    this.setState({
        showDiv: !this.state.showDiv,
        buttonText: !this.state.buttonText
    })
}
  render() {
    

    return (
      <div>
        
        <Event />
          <div className="alignPlayerShow">
        {this.state.buttonText ? <button className="userButton" onClick={this.showDiv}>Show<FontAwesomeIcon icon="users" />
        </button> : <button onClick={this.showDiv}>Hide <FontAwesomeIcon icon="users" /></button>}
        <Transition
                native
                items={this.state.showDiv}
                from={{ marginLeft: -200}}
                enter={{ marginLeft: 0}}
                config={{delay: 100, duration: 600}}
                leave={{marginLeft: -200}}
                >

                {show => show && (props=> (

                <animated.div 
                style={props}>
                    <Players />
                </animated.div>

            ))}
            </Transition>
            </div>   

      </div>
    )
  }
}
