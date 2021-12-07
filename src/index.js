let similarity = require("./Similarity");
let similarityScore = require("./SimilarityScore");

const abstractSim = (s1, s2) => {
  let winkOpts = {
    f: similarityScore.dl, //winklerMetaphone , metaphoneDl , dl , commonScore
    options: { threshold: 0.6 },
  };
  // const sim1 = similarity(s1, s2, winkOpts);
  // const sim2 = similarity(s2, s1, winkOpts);
  // if (sim1.score >= sim2.score) {
  //   return sim1;
  // } else {
  //   return sim2;
  // }
  return similarity(s1, s2, winkOpts);
};

module.exports = abstractSim;

// console.log(abstractSim(["فجل"], ["الفجل"]).matchScore);
// console.log(abstractSim(["الفجل"], ["فجل"]).matchScore);
