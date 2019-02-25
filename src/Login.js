import React, { Component } from "react";
import { Button, FormLabel, FormGroup, FormControl } from "react-bootstrap";
import NetworkHelper from './NetworkHelper.js';
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.loginHandler = this.loginHandler.bind(this)
  }

  validateForm() {
    console.log("VALIDATE FORM CLICKED");
    return this.state.username.length > 0 && this.state.password.length >= 8;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  loginHandler() {
    console.log("LOGIN HANDLER");
    NetworkHelper.loginUser(this.state.username, this.state.password).then(res => {
        console.log("Access token", res.data.access_token);
    });
  }

  render() {
    return (

    <div className="Login">
      <div>
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="username" bssize="large">
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username or Email"
            />
          </FormGroup>

          <FormGroup controlId="password" bssize="large">
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
            </FormGroup>

          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.loginHandler}
          >
            Login
          </Button>

          <div>
            <p>Not a member of The U yet? <a href="/SignUp">Sign up here</a></p>
          </div>
        </form>
      </div>
    </div>
    );
  }

}

export default Login;
