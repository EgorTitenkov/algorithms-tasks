module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['"@typescript-eslint"'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        "react-app",
        "prettier"
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        "@typescript-eslint/ban-ts-ignore": ["off"],
        "@typescript-eslint/camelcase": ["off"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/interface-name-prefix": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-unused-expressions": ["off"],
        "@typescript-eslint/no-var-requires": ["off"],
        "@typescript-eslint/no-use-before-define": ["off"],
        "comma-dangle": ["error", "always-multiline"],
        "no-async-promise-executor": ["off"],
        "no-empty-pattern": ["off"],
        "no-undef": ["error"],
        "no-var": ["error"],
        "object-curly-spacing": ["error", "always"],
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "semi": ["error", "always"],
        "spaced-comment": ["off"],
        "no-prototype-builtins": ["off"],
        "sort-keys": ["off"],
        "space-before-function-paren": ["off"],
        "indent": ["off"],
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "standard",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["prettier", "@typescript-eslint"]
};
