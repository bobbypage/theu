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
        <div className="LandingPage">
            <h1 className="title">The U</h1>

            <Row className="align-items-center">
              <Col md={{ span:6, offset:0 }}>
                <h4>
                  The U is the best website to get answers to your anonymous questions. Sign in or sign up today and join your college community.
                </h4>
              </Col>
              <Col md={{ span:6, offset:0 }}>
                <Login/>
              </Col>
            </Row>
        </div>
      </Container>
    );
  }
}

export default LandingPage;
