import React from "react";
import "./App.css";
import {Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Startpage from "./components/Startpage";
import Signup from "./components/Signup";
import Login from "./components/Login";

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
          <Route exact path="/login" render={
            props => <Login {...props} setUser={this.setUser} />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
