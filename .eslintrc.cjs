module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: true,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowAny: true,
      },
    ],
    "typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
