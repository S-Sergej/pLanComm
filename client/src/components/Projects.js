import React, { Component } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";

class Projects extends Component {
  state = {
    projects: []
  };

  getData = () => {
    axios
      .get("/api/projects")
      .then(response => {
        this.setState({
          projects: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log("Projects.render"+this.props.location.pathname);
    return (
      <div className="projects-container">
        <ProjectList projects={this.state.projects} />
        <ProjectForm getData={this.getData} />
      </div>
    );
  }
}

export default Projects;
