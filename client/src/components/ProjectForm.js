import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

class ProjectForm extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("SUBMIT");

    axios
      .post("/api/projects", {
        title: this.state.title,
        description: this.state.description
      })
      .then(response => {
        this.props.getData();
        this.setState({
          title: "",
          description: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="title">Title: </Form.Label>
          <Form.Control
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="description">Description: </Form.Label>
          <Form.Control
            type="text"
            name="description"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </Form.Group>

        <Button type="submit">Create a project</Button>
      </Form>
    );
  }
}

export default ProjectForm;
