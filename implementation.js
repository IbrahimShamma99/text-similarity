const similarity = require("text-similarity-scorer");

const score = similarity(
  "I HAVE A DREAM", //first sentence
  "I HAD A NAP" //second sentence
);

console.log(score);
