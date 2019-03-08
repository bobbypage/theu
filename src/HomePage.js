import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import Forum from './Forum';
import './HomePage.css';
import NetworkHelper from './NetworkHelper';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-135887615-1');


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        defaultPage: null,
    };
  }


    componentDidMount() {
        this._asyncRequest = NetworkHelper.tokenValid().then(
            isValid => {
                this._asyncRequest = null;
                this.setState({defaultPage: isValid ? <Forum/> : <LandingPage/>});
            }
        )
        ReactGA.pageview('/homepage');
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

