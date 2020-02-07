import React, { Component } from 'react'

export default class UserProfil extends Component {
  constructor(props){
    super(props);
    this.state={
      username: this.props.user.username,
      avatarUrl: this.props.user.avatarURL,
      email: this.props.user.email,
      usertype: this.props.user.userType
    }
  }
  render() {
    
    return (
      <div className="UserProfil">
        <img style={{backgroundColor: "white", minWidth: "200px"}} src={this.state.avatarUrl} alt="userbild" />
        <h1>{this.state.username}</h1>
        <h1>{this.state.email}</h1>
        <h1>{this.state.usertype}</h1>
      </div>
    )
  }
}
