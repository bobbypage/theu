import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import Forum from './Forum';
import './HomePage.css';
import NetworkHelper from './NetworkHelper';


class HomePage extends Component {
    state = {
        defaultPage: null,
    };

    componentDidMount() {
        this._asyncRequest = NetworkHelper.tokenValid().then(
            isValid => {
                this._asyncRequest = null;
                this.setState({defaultPage: isValid ? <Forum/> : <LandingPage/>});
            }
        )
    }

    componentWillUnmount() {
        if (this._asyncRequest)
        this._asyncRequest.cancel();
    }

    render() {
        return (
            <div>
                {this.state.defaultPage}
            </div>
        );
    }
}

export default HomePage;

