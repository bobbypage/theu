import React, { Component } from 'react';
import logo from './logo.svg';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Login from './Login.js';

import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="align-items-center row justify-content-start">
          <Col md={{span:4, offset:4}}>
            <img className="big_logo" src="logo_withoutbackground.png" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={{ span:1, offset:0 }}>
          </Col>
          <Col md={{ span:5, offset:0 }}>
            <h4>
              The U is the best way to get answers to your anonymous questions from other college students and alumni.
              <br></br><br></br>
              <b>Sign up today and join your college community!</b>
            </h4>
          </Col>
          <Col md={{ span:5, offset:0 }}>
            <div className="login">
              <Login />
            </div>
          </Col>
          <Col md={{ span:1, offset:0 }}>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LandingPage;
