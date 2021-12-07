import babel from "@rollup/plugin-babel";

const config = {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "esm",
  },
  options: {
    presets: ["env", { modules: false }],
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
};

export default config;
