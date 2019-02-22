import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavFooter from './NavFooter';
import AboutUs from './AboutUs';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import CodeOfConduct from './CodeOfConduct';
import ContactUs from './ContactUs';
import HomePage from './HomePage';
import Forum from './Forum';
import Post from './Post';
import NewPost from './NewPost';
import Login from "./Login";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// You can choose your kind of history here (e.g. browserHistory)
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="container">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path='/AboutUs' component={AboutUs} />
                            <Route path='/FAQ' component={FrequentlyAskedQuestions} />
                            <Route path='/CodeOfConduct' component={CodeOfConduct} />
                            <Route path='/ContactUs' component={ContactUs} />
                            <Route path='/Forum' component={Forum} />
                            <Route path='/Post' component={Post} />
                            <Route path='/NewPost' component={NewPost} />
                        </Switch>
                    <NavFooter/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
