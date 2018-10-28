import React, { Component } from 'react';
import { random, randomBetween, randomValueFromArray } from '../components/';

class RandomExamples extends Component {
    render() {
        return (
            <div className="example">
                <h3>Random Number Examples</h3>
                <p>normal random: {random()}</p>
                <p>normal random with max 1,000: {random(1000)}</p>
                <p>random between min and max param 100 - 200: {randomBetween(100, 200)}</p>
                <p>random value from array [12,34,65,87,23,87,57,.....]: {randomValueFromArray([12,34,65,87,23,87,57])}</p>
            </div>
        );
    }
}

export default RandomExamples;