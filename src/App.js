import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavFooter from './NavFooter'

import AboutUs from './AboutUs';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import CodeOfConduct from './CodeOfConduct';
import ContactUs from './ContactUs';
import HomePage from './HomePage';
import Forum from './Forum';
import Post from './Post';

// You can choose your kind of history here (e.g. browserHistory)
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div id="container">
                <div id="body">
                    <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path='/AboutUs' component={AboutUs} />
                      <Route path='/FAQ' component={FrequentlyAskedQuestions} />
                      <Route path='/CodeOfConduct' component={CodeOfConduct} />
                      <Route path='/ContactUs' component={ContactUs} />
                      <Route path='/Forum' component={Forum} />
                    </Switch>
                </div>
                <div>
                    <NavFooter/>
                </div>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;

