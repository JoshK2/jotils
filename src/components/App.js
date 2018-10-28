import React, { Component } from 'react';
import '../styles/App.css';
import {AddNumberExamples, RandomNumberExamples} from '../examples/';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>Math Number Functions!</h1>
                <AddNumberExamples/>
                <RandomNumberExamples/>
            </div>
        );
    }
}

export default App;