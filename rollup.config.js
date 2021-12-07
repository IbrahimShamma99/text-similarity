// import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

const config = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [
    copy({
      targets: [
        { src: "src/index.js", dest: "dist" },
        { src: "src/Similarity.js", dest: "dist" },
        { src: "src/SimilarityScore.js", dest: "dist" },
        { src: "src/Helper.js", dest: "dist" },
        { src: "src/Base.js", dest: "dist" },
        { src: "src/Stopwords.js", dest: "dist" },
        { src: "src/SbEvent.js", dest: "dist" },
      ],
    }),
  ],
};

export default config;
