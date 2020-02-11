import React from "react";
import "./App.css";
import {Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Startpage from "./components/Startpage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Mainpage from "./components/MainPage";
import UserProfil from "./components/UserProfil";
import UserEditor from "./components/UserEditor";
import Game from "./components/Game";
import EventHistory from "./components/EventHistory";
import Guestbook from "./components/Guestbook";
import Playerdetails from "./components/Playerdetails";
import Event from "./components/Event";
import EventDetails from "./components/EventDetails";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TeamGenerator from "./components/TeamGenerator";

library.add(fab, fas)


class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };


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
            props => <Game {...props} user={this.state.user} />
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
          <Route exact path="/usereditor" render={
            props => <UserEditor {...props} user={this.state.user} />
          }/>
<<<<<<< HEAD
          <Route exact path ="/teamgenerator" render={
            props => <TeamGenerator {...props} setUser={this.setUser} />
          }/>
=======
          <Route exact path="/event" render={
            props => <Event {...props} user={this.state.user} />
          }/>
          <Route exact path="/event/:eventId" render={
            props => <EventDetails {...props} user={this.state.user} />
          } />
          <Route exact path="/event/:eventId/subscribe" render={
            props => <Mainpage {...props} user={this.state.user} />
          } />
          <Route exact path="/event/:eventId/unsubscribe" render={
            props => <Mainpage {...props} user={this.state.user} />
          } />
          <Route exact path="/event/:eventId/delete" render={
            props => <Mainpage {...props} user={this.state.user} />
          } />
          }
>>>>>>> master
        </Switch>
        <footer><FontAwesomeIcon icon="copyright" /><i> by JAS</i></footer>
      </div>
    );
  }
}

export default App;
