import React, { Component } from 'react';
import { shuffleArray } from '../components/';

const array = [1,2,3,4,5,6,7,8,9,10];
const shuffled = shuffleArray(array);

class ShuffleArrayExamples extends Component {
    render() {
        return (
            <div className="example">
                <h3>Shuffle Array Examples</h3>
                <p>{array.toString()} : {shuffled.toString()}</p>
            </div>
        );
    }
}

export default ShuffleArrayExamples;