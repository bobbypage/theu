import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import AboutUs from './AboutUs';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import CodeOfConduct from './CodeOfConduct';
import ContactUs from './ContactUs';
import HomePage from './HomePage';
import Forum from './Forum';

import './NavFooter.css';

class NavFooter extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/AboutUs'} className="nav-link">About Us</Link></li>
              <li><Link to={'/FAQ'} className="nav-link">FAQ</Link></li>
              <li><Link to={'/CodeOfConduct'} className="nav-link">Code of Conduct</Link></li>
              <li><Link to={'/ContactUs'} className="nav-link">Contact Us</Link></li>
            </ul>
            </nav>
        </div>
    );
  }
}

export default NavFooter;
