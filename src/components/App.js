import React, { Component } from 'react';
import '../styles/App.css';
import Examples from '../examples/AddNumber';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>Math Number Functions!</h1>
                <Examples/>
            </div>
        );
    }
}

export default App;