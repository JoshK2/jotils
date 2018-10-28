import React, { Component } from 'react';
import '../styles/App.css';
import { SumExamples, RandomExamples, ShuffleArrayExamples } from '../examples/';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>Math Functions!</h1>
                <SumExamples/>
                <RandomExamples/>
                <ShuffleArrayExamples/>
            </div>
        );
    }
}

export default App;