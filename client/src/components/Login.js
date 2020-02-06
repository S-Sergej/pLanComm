import {GoogleLoginButton, GithubLoginButton} from 'react-social-login-buttons';
import React, { Component } from "react";
import { login } from "../services/auth";
import { Alert, Form, Button } from "react-bootstrap";
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    //const REACT_APP_CALLBACK_URL_LOCAL='http://localhost:5555/api/auth/google'
    const REACT_APP_CALLBACK_URL='http://plancomm.herokuapp.com/api/auth/google'
    //const GITHUB_LOCAL_REDIRECT='http://localhost:5555/api/auth/github'
    const GITHUB_REDIRECT='http://plancomm.herokuapp.com/api/auth/github'
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
          <Button type="submit">Log in <FontAwesomeIcon icon="sign-in-alt"/></Button>
        </Form>
        {/*links for heroku usage configured*/}
        <div className="SocialButtons">
        <GoogleLoginButton style={{width: "300px"}} onClick={() => window.location.href=REACT_APP_CALLBACK_URL}/>
        <GithubLoginButton style={{width: "300px"}} onClick={() => window.location.href=GITHUB_REDIRECT} />
        </div>
      </div>
    );
  }
}

export default Login;
