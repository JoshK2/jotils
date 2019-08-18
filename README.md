# jotils 
[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fjotils)](https://bit.dev/joshk/jotils) [![npm version](https://badge.fury.io/js/jotils.svg)](http://badge.fury.io/js/jotils) [![GitHub stars](https://img.shields.io/github/stars/joshk2/jotils)](https://github.com/JoshK2/jotils/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/jotils/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)

jotils is a JavaScript utility library.

## Play and install with Bit
Using [bit](https://bit.dev/joshk/jotils) to play with live demo, and install the functions separately without having to install the whole project.

<p align="center">
  <a href="https://bit.dev/joshk/jotils"><img src="https://i.imagesup.co/images2/59cab3fb276893a41348e3777e62e2822d2c2f29.gif"></a>
</p>

```bash
$ npm i @bit/joshk.jotils.letter-count
```

```js
const { letterCount } = require('@bit/joshk.jotils.letter-count');
```
## Installation

Using [npm](https://www.npmjs.com/package/jotils) to install jotils.  

```bash
$ npm i --save jotils
```
## Usage Examples

In Node.js:
```js
const J = require('jotils');
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

**Steps to contribute**

1) Fork the project and clone.
2) Create folder for your function in this [folder](https://github.com/JoshK2/jotils/tree/master/src/components), name the folder and the function file in lower case, and the function with upper case.
See example of naming in this folder [folder](https://github.com/JoshK2/jotils/tree/master/src/components/letter-count).
3) The function need to be exported with index file inside the folder function, so create index.ts file to export your function. (NOT USE EXPORT DEFAULT)
3) Run `npm run createindexfile` to generate the main index.ts file in components folder that export all the functions.
4) Run `npm run build` to generate the build folder folder.
5) Run `npm run test` to check the functions.
6) Share with the community by submitting a PR.
