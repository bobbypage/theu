import React, { Component } from "react";
import { Button, FormLabel, FormGroup, FormControl } from "react-bootstrap";
import NetworkHelper from './NetworkHelper.js';
import "./SignUp.css";
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailError: {
        visible: false,
        message: ""
      },
      username: "",
      usernameError: {
        visible: false,
        message: ""
      },
      password: "",
      passwordError: {
        visible: false,
        message: ""
      },
      confirmPassword: "",
      confirmPasswordError: {
        visible: false,
        message: ""
      },
      shouldRedirect: false,
    };
    this.signUpHandler = this.signUpHandler.bind(this)
  }

  validateForm() {
    let validUsername = this.validateUsername();
    let validEmail= this.validateEmail();
    let validPassword = this.validatePassword();

    return validUsername && validEmail && validPassword;
  }

  validateUsername() {
    return this.state.username.length > 0;
  }

  validateEmail() {
    return this.state.email.length > 0 && this.state.email.endsWith(".edu");
  }

  validatePassword() {
    return this.state.password.length >= 1 && this.state.confirmPassword === this.state.password;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleEmail = event => {
    let email = event.target.value;
    if (!email.endsWith(".edu")) {
        this.setState({
            ["emailError"]: {
                visible: true,
                message: "Please use a .edu email!"
            }
        });
    } else {
        this.setState({
            ["emailError"]: {
                visible: false,
                message: ""
            }
        });
    }
  }

  handleUsername = event => {
    let username = event.target.value;
    if (username.length < 1) {
        this.setState({
            ["usernameError"]: {
                visible: true,
                message: "Must have a username"
            }
        });
    } else {
        this.setState({
            ["usernameError"]: {
                visible: false,
                message: ""
            }
        });
    }
  }

  handlePassword = event => {
    let password = event.target.value;
    if (password.length < 8) {
        this.setState({
            ["passwordError"]: {
                visible: true,
                message: "Password must be at least 8 characters!"
            }
        });
    } else {
        this.setState({
            ["passwordError"]: {
                visible: false,
                message: ""
            }
        });
    }
  }

  handleConfirmPassword = event => {
    let confirmPassword = event.target.value;
    if (confirmPassword !== this.state.password) {
        this.setState({
            ["confirmPasswordError"]: {
                visible: true,
                message: "Passwords must match!"
            }
        });
    } else {
        this.setState({
            ["confirmPasswordError"]: {
                visible: false,
                message: ""
            }
        });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  signUpHandler() {
    NetworkHelper.createUser(this.state.email, this.state.username, this.state.password).then(res => {
      NetworkHelper.loginUser(this.state.email, this.state.username, this.state.password).then(tokenres => {
        let token = tokenres.data.access_token;
        NetworkHelper.saveToken(token);
        this.setState({shouldRedirect: true});
      });
    });
  }

  render() {
    const {shouldRedirect} = this.state;

    if (shouldRedirect) {
      return <Redirect push to={{ 
        pathname: "/forum", 
      }} />;
    }

    return (

    <div className="signUp">
      <h1 className="title">Create Your Account</h1>
      <div className="signUpForm">
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.handleEmail}
              placeholder="email@uni.edu"
            />

          <div className={this.state.emailError.visible ? "hidden" : ""}>
            {this.state.emailError.message}
          </div>
          </FormGroup>

          <FormGroup controlId="username" bsSize="large">
            <FormControl
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
              onBlur={this.handleUsername}
              placeholder="Username"
            />

          <div className={this.state.usernameError.visible ? "hidden" : ""}>
            {this.state.usernameError.message}
          </div>
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handlePassword}
              type="password"
              placeholder="Password"
            />

          <div className={this.state.passwordError.visible ? "hidden" : ""}>
            {this.state.passwordError.message}
          </div>
          </FormGroup>

          <FormGroup controlId="confirmPassword" bsSize="large">
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              onBlur={this.handleConfirmPassword}
              type="password"
              placeholder="Confirm Password"
            />

          <div className={this.state.confirmPasswordError.visible ? "hidden" : ""}>
            {this.state.confirmPasswordError.message}
          </div>
          </FormGroup>

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

export default SignUp;
