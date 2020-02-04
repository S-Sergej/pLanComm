import React from "react";
import "./App.css";
import {Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Startpage from "./components/Startpage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Mainpage from "./components/MainPage"
import UserProfil from "./components/UserProfil"
import Game from "./components/Game"
import EventHistory from "./components/EventHistory"
import Guestbook from "./components/Guestbook"
import Playerdetails from "./components/Playerdetails"


class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  /*projectsRoute = props => {
    if (this.state.user) {
      return <Projects {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  } */

  render() {
    
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Switch>
          <Route exact path="/" component={Startpage} />
          <Route exact path="/signup" render={
            props => <Signup {...props} setUser={this.setUser} />
          }/>
          <Route exact path="/userprofil" render={
            props => <UserProfil {...props} user={this.state.user} />
          }/>
          <Route exact path="/login" render={
            props => <Login {...props} setUser={this.setUser} />
          }/>
          <Route exact path="/game" render={
            props => <Game {...props} setUser={this.setUser} />
          }/>
          <Route exact path="/main" render={
            props => <Mainpage {...props} setUser={this.setUser} />
          }/>
          <Route exact path="/eventhistory" render={
            props => <EventHistory {...props} setUser={this.setUser} />
          }/>
           <Route exact path="/guestbook" render={
            props => <Guestbook {...props} user={this.state.user} />
          }/>
          <Route exact path="/playerdetail" render={
            props => <Playerdetails {...props} setUser={this.setUser} />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
