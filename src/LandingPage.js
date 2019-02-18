import React, { Component } from 'react';
import logo from './logo.svg';

import Button from 'react-bootstrap/Button';

import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage-header">
          <h1> The U </h1>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <style type="text/css">
          {`
            .btn-flat {
              background-color: purple;
              color: white;
            }

            .btn-xxl {
              padding: 1rem 1.5rem;
              font-size: 1.5rem;
            }
            `}
          </style>
          <Button variant="flat" size="xxl">
            flat button
          </Button>
          <a
            className="LandingPage-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    );
  }
}

export default LandingPage;
