import React, { Component } from 'react';
import '../styles/App.css';
import { SumExamples, RandomExamples } from '../examples';

class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>Math Functions!</h1>
                <SumExamples/>
                <RandomExamples/>
            </div>
        );
    }
}

export default App;