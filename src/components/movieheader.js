import React, {Component} from 'react';
import logo from '../logo.svg';

class MovieHeader extends Component {
    render(){return <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Michael Hedrick App</h1>
        </header>
    </div>}};

export default MovieHeader; //must have this on each component, lets you import later