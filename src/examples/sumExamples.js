import React, { Component } from 'react';
import { sumTwo, sumArray } from '../components/';

class SumExamples extends Component {
    render() {
        return (
            <div className="example">
                <h3>Add Number Examples</h3>
                <p>1 + 2 = {sumTwo(1, 2)}</p>
                <p>[1,2,3] = {sumArray([1,2,3])}</p>
            </div>
        );
    }
}

export default SumExamples;