import React, { Component } from 'react';
import './NotVerified.css';

class NotVerified extends Component {
  render() {
    return (
      <div>
          <div id="header">
            <h3>
                Account not verified!
            </h3>
          </div>
          <div id="content">
              Please verify your account by clicking on the link sent to your email.
          </div>
      </div>
    );
  }
}

export default NotVerified;