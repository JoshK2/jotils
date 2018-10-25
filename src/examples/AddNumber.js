import React, { Component } from 'react';
import AddNumber from '../components/AddNumber';

class AddNumberExamples extends Component {
    render() {
        return (
            <div className="example">
                <h3>Add Number Examples</h3>
                <p>1 + 2 = {AddNumber.additionNumbers(1, 2)}</p>
                <p>[1,2,3] = {AddNumber.additionArray([1,2,3])}</p>
            </div>
        );
    }
}

export default AddNumberExamples;