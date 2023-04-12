module.export = {
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "airbnb-typescript",
    "react-app",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.{js,jsx,ts,tsx}", "src/tests/**/*"],
      },
    ],
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
  },
};
