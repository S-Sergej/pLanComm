import GoogleButton from 'react-google-button';
import React, { Component } from "react";
import { login } from "../services/auth";
import { Alert, Form, Button } from "react-bootstrap";
import {Link } from "react-router-dom";
require('dotenv').config();

class Login extends Component {
  
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    login(this.state.username, this.state.password).then(data => {
      if (data.message) {
        // handle errors
        this.setState({
          error: data.message
        });
      } else {
        // no error
        // lift the data up to the App state
        this.props.setUser(data);
        // redirect to "/projects"
        this.props.history.push("/main");
      }
    });
  };
  
  render() {
    const REACT_APP_CALLBACK_URL_LOCAL='http://localhost:5555/api/auth/google'
    const REACT_APP_CALLBACK_URL='http://plancomm.herokuapp.com/api/auth/google'
    
    return (
      <div>
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Username: </Form.Label>
            <Form.Control
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password: </Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

          </Form.Group>
          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}
          <Button type="submit">Log in</Button>
        </Form>
        {/*Change constant for use on heroku side before build*/}
        <GoogleButton onClick={() => window.location.href=REACT_APP_CALLBACK_URL}/>
      </div>
    );
  }
}

export default Login;
