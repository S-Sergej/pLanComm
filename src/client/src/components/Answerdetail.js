import React, { Component } from 'react'
import axios from "axios"
import {Transition, animated} from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Answerdetail extends Component {
  constructor(props){
    super(props);
    this.state={
      answersforOneEntrie: [],
      showAnswer: false,
      showDiv: true
      
    }
  }
  

 //show all Answers

 showAnswer(guestBookId){
  console.log(guestBookId)
  axios.get(`/api/guestbook/answer/${guestBookId}`)
  .then(res=>{
    this.setState({
      answersforOneEntrie: res.data,
      showAnswer: true
    })
  })
};

  hideAnswer=()=>{
    this.setState({
      showAnswer: false
    })
  }

  render() {
    console.log(this.state.answersforOneEntrie.length >0)
   
    return (
      <div >
     
      
   {/* Ob der Show oder Hide Button angezeigt werden soll */}
   { (!this.state.showAnswer) ? 
   <button  className="btn_guestbook" guestbookid={this.props.guestbookid} onClick={()=>this.showAnswer(this.props.guestbookid)}><FontAwesomeIcon icon="comments" /> Show</button> 
   : <button  className="btn_guestbook"onClick={this.hideAnswer}><FontAwesomeIcon icon="times-circle" /> Close </button>}
      
       
      {/* Hier werden dann die Antworten gerendert */}
      <div className="answerdetail">
      {(this.state.showAnswer)?  this.state.answersforOneEntrie.map(oneAnswer=>

      <div key={oneAnswer._id}>
        <Transition
                native
                items={this.state.showDiv}
                from={{ opacity: 0}}
                enter={{ opacity: 1}}
                config={{delay: 100, duration: 400}}
                leave={{opacity: 0}}
                >

                {show => show && (props=> (

                <animated.div 
                style={props}>
                  <div className="answer">
           
              {(oneAnswer.user !== null) ? 
                  <div className="left">
                      <img style={{backgroundColor: "white"}} src={oneAnswer.user.avatarURL} alt={oneAnswer.user.username} />
                      <p>{oneAnswer.user.username}</p>
                  </div>

                    : 
                  <div className="left">
                    <img style={{backgroundColor: "white", width: "80px"}} src="https://cdn.onlinewebfonts.com/svg/img_74993.png" alt="bild" />                    <p>anonymous</p>
                  </div> 
              }
           
           <div className="right">
              <h1>{oneAnswer.title}</h1>
              <p>{oneAnswer.description}</p>
              <p>{new Date(oneAnswer.createdAt).toLocaleDateString()} {new Date(oneAnswer.createdAt).toLocaleTimeString()}</p>
           </div>
          </div>   
                </animated.div>

            ))}
        </Transition>
        
      </div>)    : null}
      
      </div>
      </div>
    )
  }
}
