import React, { Component } from "react";
import { Button, FormLabel, FormGroup, FormControl } from "react-bootstrap";
import NetworkHelper from './NetworkHelper.js';
import "./Login.css";

// add this to top of App.js :
// import Login from "./Login";
// and in render : <Login />

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
      // confirmPassword: ""
    };
    this.loginHandler = this.loginHandler.bind(this)
    this.signUpHandler = this.signUpHandler.bind(this)
  }

  validateForm() {
    console.log(this.state.email);
    console.log("VALIDATE FORM CLICKED");
    return this.state.email.length > 0 && this.state.password.length > 0;
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
    console.log(this.state);
    NetworkHelper.loginUser(this.state.email, this.state.password).then(res => {
        console.log("Access token", res.data.access_token);
    });
  }

  signUpHandler() {
    console.log("SIGNUP HANDLER");
    NetworkHelper.createUser(this.state.username, this.state.email, this.state.password).then(res => {
      console.log(res);
    });
  }

  render() {
    return (

    <div className="Login">
            <p>Login in with your</p>
      <div >
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

                    <p>Or</p>

          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            </FormGroup>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.loginHandler}
          >
            Login
          </Button>

          Not a member of The U yet? Sign up for free

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.signUpHandler}
          >
            Sign up
          </Button>
        </form>
      </div>
      </div>
    );
  }

}
// export default Login;
