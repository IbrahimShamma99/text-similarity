# text-similarity-scorer middleware

[![npm](https://img.shields.io/npm/v/text-similarity-scorer.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/text-similarity-scorer)

> text-similarity-scorer is your goto similarity score between two strings

For more informatiom about the future of the package, check out the [discussion here](https://github.com/IbrahimShamma99/text-similarity/issues).

## Table of contents

- [text-similarity-scorer](#text-similarity-scorer)
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
console.log(score);
/*
{
  matched: [ 0, -1, 2, -1 ],
  matchScore: [ 1, 0, 1, 0 ],
  exact: 2,
  literal: 0,
  score: 2,
  score_pct: 0.5,
  order: 1,
  size: 0.25
}
*/

```

## To Do

- [ ] Adding ability to choose similarity algorithm

## License

MIT
