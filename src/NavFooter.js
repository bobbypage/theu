import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap";

import NetworkHelper from './NetworkHelper';
import './NavFooter.css';

class NavFooter extends Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this._asyncRequest = setInterval(() => NetworkHelper.tokenValid().then(isValid => this.setState({loggedIn: isValid})), 3000);
  }

  componentWillUnmount() {
    this._asyncRequest.cancel();
  }


  render() {
    return (
      <Navbar bg="light" expand="lg" className="fixed-bottom" id="nav-bar-priority">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand className="homePageButton" href="/"><img className="logo" src="big_logo.png" /></Navbar.Brand>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
            <Nav.Link href="/CodeOfConduct">Code Of Conduct</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
            {this.state.loggedIn ? <Button onClick={this.handleSignOut} href="/">Sign Out</Button> : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  handleSignOut() {
    NetworkHelper.clearToken();
    this.setState({loggedIn: false});
  }
}

export default NavFooter;
