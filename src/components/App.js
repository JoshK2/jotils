import React, { Component } from 'react';
import '../styles/App.css';
import AddNumberExamples from '../examples/AddNumber';
import RandomNumberExample from '../examples/RandomNumber';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>Math Number Functions!</h1>
                <AddNumberExamples/>
                <RandomNumberExample/>
            </div>
        );
    }
}

export default App;