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

  
  render() {
    console.log(this.state.showAnswer)
     return (
       
      <div className="guestBook-Align">
        <GuestbookModal showAll={this.showAllEntries} user={this.state.currentUser} />
         <div className="guestbookEntrie">
          {this.state.guestbook.map(oneEntrie=>{
            const date= oneEntrie.createdAt
            const d= new Date(date)
    
    return <div key={oneEntrie._id}>
      <div className="guestbook" >
        <div className="guestBookUser">
          {(oneEntrie.user !== null) ? 
          <div>
            <img  src={oneEntrie.user.avatarURL} alt="bild" />
            <p>{oneEntrie.user.username}</p>
            <p>{d.toLocaleDateString()} {d.toLocaleTimeString()} </p>
          </div>

            : 
          <div>
            <img  src="https://cdn.onlinewebfonts.com/svg/img_74993.png" alt="bild" />
            <p>anonymous</p>
          </div> }
        
        </div>
          <div >
            <h1>{oneEntrie.title}</h1>
            <p className="oneGuestbookEntrie">{oneEntrie.entrie}</p>
          <div className="arrangeDateAndAnswer">
      
              {(oneEntrie.answer.length >0) && <p><FontAwesomeIcon icon="comments" /> {oneEntrie.answer.length}</p>}
      
          </div>
        </div>
      </div>
 
      
             {/* Hier ist der Code, damit die Admins Einträge löschen können */}
             {(this.state.currentUser.userType ==="admin") ? <button className="btn_guestbook" onClick={()=>this.deleteEntrie(oneEntrie._id)}><FontAwesomeIcon icon="trash-alt" /></button> : null}
             {/* Hier ist der Code für die Antwort Funktion */}
             <Answer showAllEntries={this.showAllEntries} entryId={oneEntrie._id} user={this.state.currentUser}/>

             <Answerdetail  guestbookid={oneEntrie._id}/>

      </div>
        }        
      )}
      

    </div>
      </div>
      
      )
    }

  
}
