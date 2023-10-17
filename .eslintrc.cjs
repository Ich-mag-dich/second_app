module.exports = {
  extends: ["plugin:@next/next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    // Other rules
    "@next/next/no-img-element": "off",
    "@next/next/no-page-custom-font": "off",
    "@next/next/no-sync-scripts": "off",
  },
};
