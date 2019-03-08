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
        <div id="footer" className="fixed-bottom">
          <div class="item"><Link to={'/'} className="nav-link link-text"> Home </Link></div>
          <div class="item"><Link to={'/AboutUs'} className="nav-link link-text">About Us</Link></div>
          <div class="item"><Link to={'/FAQ'} className="nav-link link-text">FAQ</Link></div>
          <div class="item"><Link to={'/CodeOfConduct'} className="nav-link link-text">Code of Conduct</Link></div>
          <div class="item"><Link to={'/ContactUs'} className="nav-link link-text"><div>Contact Us</div></Link></div>
        </div>
    );
  }
}

export default NavFooter;
