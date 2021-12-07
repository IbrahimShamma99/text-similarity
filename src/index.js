let similarityObj = require("./Similarity");
let similarityScore = require("./SimilarityScore");

const abstractSim = (s1, s2) => {
  let winkOpts = {
    f: similarityScore.dl, //winklerMetaphone , metaphoneDl , dl , commonScore
    options: { threshold: 0.6 },
  };
  return similarityObj(s1, s2, winkOpts);
};

module.exports = abstractSim;

// console.log(abstractSim(["فجل"], ["الفجل"]).matchScore);
// console.log(abstractSim(["الفجل"], ["فجل"]).matchScore);
