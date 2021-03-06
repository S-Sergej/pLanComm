import React, { Component } from "react";
import { signup } from "../services/auth";
import { Alert, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    signup(this.state.username, this.state.password, this.state.email).then(data => {
      if (data.message) {
        // handle errors
        this.setState({
          error: data.message
        });
      } else {
        // no error
        // lift the data up to the App state
        //this.props.setUser(data);
        // redirect to "/projects"
        this.props.history.push("/login");
      }
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="formSignup">
        <Form  onSubmit={this.handleSubmit}>
          <Form.Group>
            {/* <Form.Label style={{color: "white"}}htmlFor="username">Username: </Form.Label> */}
            <Form.Control
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="username"
            />
          </Form.Group>
          
          <Form.Group>
            {/* <Form.Label style={{color: "white"}}htmlFor="password">Password: </Form.Label> */}
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
            />
          </Form.Group>

          <Form.Group>
            {/* <Form.Label style={{color: "white"}}htmlFor="email">Email: </Form.Label> */}
            <Form.Control
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="email"
            />
          </Form.Group>

          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}
          <Button type="submit">Sign up <FontAwesomeIcon icon="user-plus" /></Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
