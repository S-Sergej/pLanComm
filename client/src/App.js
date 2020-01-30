import React from "react";
import "./App.css";
import {Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import TaskDetail from "./components/TaskDetail";
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


  projectsRoute = props => {
    if (this.state.user) {
      return <Projects {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Switch>
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/signup" render={
            props => <Signup {...props} setUser={this.setUser} />
          }/>
          <Route exact path="/login" render={
            props => <Login {...props} setUser={this.setUser} />
          }/>
          {/* <Route exact path="/projects" component={Projects} /> */}
          <Route exact path="/projects" render={this.projectsRoute}/>
          {/* <Route exact path="/projects/:id" component={ProjectDetail} /> */}
          <Route exact path="/projects/:id" render={
            props => <ProjectDetail user={this.state.user} {...props} />
          }/>
          <Route exact path="/tasks/:id" component={TaskDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
