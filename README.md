# jotils ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

jotils is a JavaScript utility library.

## Installation

Using [npm](https://www.npmjs.com/package/jotils) to install jotils.  
Using [bit](https://bitsrc.io/joshk/jotils) to install the functions separately without having to install the whole project.

```bash
$ npm i -g npm
$ npm i --save jotils
```

## Usage Examples

```react
import * as J from 'jotils';

const uniqueArray = J.removeDuplicatesInArray([1,2,3,1,3]);
```
You can manually pick methods like the following, which would only grab the parts necessary for `removeDuplicatesInArray` to work:
```react
import removeDuplicatesInArray from 'jotils/src/components/removeDuplicatesInArray';

const uniqueArray = removeDuplicatesInArray([1,2,3,1,3]);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
