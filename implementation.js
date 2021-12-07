const similarity = require("./dist/index");

const score = similarity(
  "I HAVE A DREAM", //first sentence
  "I HAD A NAP" //second sentence
);

console.log(score);
