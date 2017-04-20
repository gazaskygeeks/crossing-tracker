module.exports = {
  "env": {
    "shared-node-browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "no-unused-vars": ["error", {
      "args": "none"
    }
  ],
  "max-len": [2, 80, 4, {ignoreComments: true, ignoreUrls: true,ignoreStrings: true, ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\("}]
  },
  "plugins": [
    "react",
    "standard"
  ]
};
