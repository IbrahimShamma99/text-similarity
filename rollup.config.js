import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const config = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "commonjs",
  },
  //   external: [
  //     "natural",
  //     "damerau-levenshtein",
  //     "clone",
  //     "binary-search",
  //     "events",
  //   ],
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
};

export default config;
