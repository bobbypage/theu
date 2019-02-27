import React, { Component } from 'react';
import { Button, FormLabel, FormGroup, FormControl } from "react-bootstrap";
import './ContactUs.css';
import NetworkHelper from './NetworkHelper.js';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      type: "",
      message: ""
    };
  }

  validateForm() {
    return this.validateEmail() && this.validateType() && this.validateMessage();
  }

  validateEmail() {
    return this.state.email.length >= 5 && this.state.email.includes("@");
  }

  validateType() {
    return this.state.type.length > 0 && this.state.type !== "Select an option..."
  }

  validateMessage() {
    return this.state.message.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  contactUsHandler() {
      NetworkHelper.contactUs(this.state.email, this.state.type, this.state.message).then(res => {
        let token = res.data.access_token;
        NetworkHelper.saveToken(token);
        this.setState({shouldRedirect: true});
      }).catch(err => {
        alert("Could not send email");
      });
    }

  render() {
    return (
      <div className="ContactUs">
          <div id="header">
            <h3>
                Contact Us
            </h3>
          </div>
          <div id="content">
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bssize="large">
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                </FormGroup>

                <FormGroup controlId="type">
                  <FormControl
                    as="select"
                    value={this.state.type}
                    onChange={this.handleChange}
                    type="type">
                    <option>Select an option...</option>
                    <option>New University Request</option>
                    <option>Anonymity</option>
                    <option>Site Improvement Suggestions</option>
                    <option>Other</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="message" bssize="large">
                  <FormControl
                    as="textarea"
                    type="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder="Type your message..."
                  />
                </FormGroup>

                <Button
                  block
                  bssize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                  onClick={this.contactUsHandler}
                >
                  Send email
                </Button>
            </form>
          </div>
      </div>
    );
  }
}

export default ContactUs;