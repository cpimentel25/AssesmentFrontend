module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "jsx-a11y",
        "react"
    ],
    "rules": {
        // "jsx-a11y/label": [2, {
        //     "labelComponents": ["CustomLabel"],
        //     "labelAttributes": ["inputLabel"],
        //     "controlComponents": ["CustomInput"],
        //     "assert": "both",
        //     "depth": 3,
        //   }],
        "semi": [2, "always"],
        "quotes": [2, "double"],
    }
};
