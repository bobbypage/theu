import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div>
          <div id="header">
            <h3>
                About Us
            </h3>
          </div>
          <div id="content">
            We are an anonymous social media platform for students by students.
            We require a student email with verification, and....
          </div>
      </div>
    );
  }
}

export default AboutUs;