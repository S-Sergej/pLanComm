import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default class ProjectDetails extends Component {
  state = {
    title: "",
    description: "",
    project: ""
  };

  componentDidMount() {
    const taskId = this.props.match.params.id;

    return axios
      .get(`/api/tasks/${taskId}`)
      .then(response => {
        const { title, description, project } = response.data;
        this.setState({ title, description, project });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const task = {
      title: this.state.title,
      description: this.state.description,
      project: this.state.project
    };

    return (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <Link to={`/projects/${task.project}`}>Back to project</Link>
      </div>
    );
  }
}
