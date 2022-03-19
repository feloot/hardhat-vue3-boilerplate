module.exports = {
  // root: true,
  env: {
    browser: false,
    es2021: true,
    mocha: false,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    // "standard",
    // "plugin:node/recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "node/no-unsupported-features/es-syntax": [
    //   "error",
    //   { ignores: ["modules"] },
    // ],
  },
  overrides: [
    {
      files: [
        "**/src/*.{j,t}s?(x)",
        "**/src/*.app",
      ],
      env: {
        browser: true,
      },
    },
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
        "**/test/*.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
