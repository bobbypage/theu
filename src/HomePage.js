import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import Forum from './Forum';
import './HomePage.css';


class HomePage extends Component {
    render() {
        const isLoggedIn = false;
        let defaultPage;

        if (isLoggedIn) {
            defaultPage = <Forum />;
        } else {
            defaultPage = <LandingPage />;
        }

        return (
            <div>
                {defaultPage}
            </div>
        );
    }
}

export default HomePage;

