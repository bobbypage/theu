import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signup.css";
// add this to the top of App.js :
// import Login from "./Signup";
// and in render : <Signup />
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
      // confirmPassword: ""
    };
  }

  validateForm() {
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

  render() {
    return (

    <div className="Sign up">
            <p>Sign up with your University email and choose a username that you like</p>
      <div >
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="email" bsSize="large">
            <h1>Email</h1>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="username" bsSize="large">
            <h1>User Name</h1>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <h1>Password</h1>
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
