import babel from "@rollup/plugin-babel";

const config = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "commonjs",
  },
  options: {
    presets: ["env", { modules: false }],
  },
  external: [
    "natural",
    "damerau-levenshtein",
    "clone",
    "binary-search",
    "events",
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
};

export default config;
