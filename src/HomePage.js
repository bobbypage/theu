import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import Forum from './Forum';
import './HomePage.css';
import NetworkHelper from './NetworkHelper';


class HomePage extends Component {
    render() {
        let defaultPage;

        if (NetworkHelper.tokenValid()) {
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

