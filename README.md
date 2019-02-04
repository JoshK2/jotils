# jotils ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

jotils is a JavaScript utility library.

## Installation

Using [npm](https://www.npmjs.com/package/jotils) to install jotils.  

```bash
$ npm i --save jotils
```

Using [bit](https://bitsrc.io/joshk/jotils) to install the functions separately without having to install the whole project.

```bash
$ npm i @bit/joshk.jotils.letter-count
```

```js
const letterCount = require('@bit/joshk.jotils.letter-count');
```

## Usage Examples

In Node.js:
```js
const J = require('jotils');
```

You can manually pick methods like the following, which would only grab the parts necessary for `getAllFiles` to work:
```js
const getAllFiles = require('jotils/build/getAllFiles');
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
