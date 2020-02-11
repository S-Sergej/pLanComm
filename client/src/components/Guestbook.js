import React, { Component } from 'react'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GuestbookModal from "./GuestbookModal"
import Answer from "./Answer"
import Answerdetail from "./Answerdetail"

export default class Guestbook extends Component {
  constructor(props){
    super(props);
    this.state={
      guestbook: [],
      currentUser: this.props.user,
      showAnswer: false,
      
      
     }
  }

  //Method to show all entries in the Guestbook
   showAllEntries=()=>{
    axios.get("/api/guestbook")
    .then(response=>{
      this.setState({
        guestbook: response.data,
        
        
       })
    })
  }

  componentDidMount(){
    this.showAllEntries();
  }


    //Delete guestbook entrie only for Admins
    deleteEntrie(id){
      axios.delete(`/api/guestbook/delete/${id}`)
      this.showAllEntries()

    }

    //show all Answers

    /* showAnswer(guestBookId){
      console.log(guestBookId)
      axios.get(`/api/guestbook/answer/${guestBookId}`)
      .then(res=>{
        this.setState({
          answersforOneEntrie: res.data,
          showAnswer: true
        })
      })
    }; */


  render() {
    /* console.log(this.state.answersforOneEntrie) */
     return (
       
      <div className="guestBook-Align">
    <GuestbookModal showAll={this.showAllEntries} user={this.state.currentUser} />
    <div className="guestbookEntrie">
    {this.state.guestbook.map(oneEntrie=>{
      const date= oneEntrie.createdAt
      const d= new Date(date)
    
    return <div key={oneEntrie._id}><div className="guestbook" >
      <div className="guestBookUser">
        <img  src={oneEntrie.user.avatarURL} alt="bild" />
        <p>{oneEntrie.user.username}</p>
        <p>{d.toLocaleDateString()} {d.toLocaleTimeString()} </p>
      </div>
      <div ><h1>{oneEntrie.title}</h1>
      <p className="oneGuestbookEntrie">{oneEntrie.entrie}</p>
      
      <div className="arrangeDateAndAnswer">
      
      {(oneEntrie.answer.length >0) && <p>Replies {oneEntrie.answer.length}</p>}
      </div>
      </div>
      </div>
      
      
     
        {/* Hier ist der Code, damit die Admins Einträge löschen können */}
      {(this.state.currentUser.userType ==="admin") ? <button onClick={()=>this.deleteEntrie(oneEntrie._id)}><FontAwesomeIcon icon="trash-alt" /></button> : null}
      {/* Hier ist der Code für die Antwort Funktion */}
      <Answer entryId={oneEntrie._id} user={this.state.currentUser}/>
      
      <Answerdetail  guestbookid={oneEntrie._id}/>

      </div>
        }        
      )}
      

    </div>
      </div>
      
      )
    }

  
}
