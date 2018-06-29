module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        "angular": true,
		"beforeEach": true,
		"describe": true,
		"inject": true,
		"it": true,
		"expect": true,
		"karma": true,
		"_": true
    }
};
