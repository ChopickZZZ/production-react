module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/prefer-includes": "off",
    "react/jsx-indent": [2, 2],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: ["js", "jsx", "tsx"],
      },
    ],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/display-name": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/order": "off",
    "import/extensions": "off",
    "no-unused-vars": "warn",
    "comma-dangle": "off",
    "n/handle-callback-err": "warn",
    "padded-blocks": "off",
    indent: [2, 2],
    quotes: "off",
    semi: "off",
  },
  globals: {
    __IS_DEV__: true,
  },
};
