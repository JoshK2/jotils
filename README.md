# MathNumberFunctions ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

MathNumberFunctions is a utils library for manipulate numbers in you project.


## Usage Examples

```react
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
```

```react
import React, { Component } from 'react';
import { shuffleArray } from '../components/';

const arrayToShuffle = [1,2,3,4,5,6,7,8,9,10];

class ShuffleArrayExamples extends Component {
    render() {
        return (
            <div className="example">
                <h3>Shuffle Array Examples</h3>
                <p>{arrayToShuffle.toString()} : {shuffleArray(arrayToShuffle).toString()}</p>
            </div>
        );
    }
}

export default ShuffleArrayExamples;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
