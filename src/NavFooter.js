import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap";

import './NavFooter.css';

class NavFooter extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="fixed-bottom">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand className="homePageButton" href="/"><img className="logo" src="big_logo.png" /></Navbar.Brand>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
            <Nav.Link href="/CodeOfConduct">Code Of Conduct</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavFooter;
