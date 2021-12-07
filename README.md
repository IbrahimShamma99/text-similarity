# text-similarity-scorer middleware

[![npm](https://img.shields.io/npm/v/text-similarity-scorer.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/text-similarity-scorer)

> text-similarity-scorer is a middleware can be added with no time to privilage the asynchronous server requests into your Redux store

For more informatiom about the future of redux-logger, check out the [discussion here](https://github.com/IbrahimShamma99/asynDispatch-middleware/issues).

## Table of contents

- [text-similarity-scorer middleware](#text-similarity-scorer-middleware)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [To Do](#to-do)
  - [License](#license)

## Install

`npm i --save text-similarity-scorer`

## Usage

```javascript
const similarity = require("text-similarity-scorer");

const score = similarity(
  "I HAVE A DREAM", //first sentence
  "I HAD A NAP" //second sentence
);
// NOTE : Order matters

```

## To Do

- [ ] Adding ability to choose similarity algorithm

## License

MIT
