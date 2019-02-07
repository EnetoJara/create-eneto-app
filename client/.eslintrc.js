module.exports = {
	extends: ["eslint:recommended", "react-app"],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	plugins: ["jsx-a11y", "react", "import"],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
		},
	},
	settings: {
		polyfills: ["promises"],
		"import/resolver": {
			node: {
				moduleDirectory: "node_modules",
			},
		},
	},
	rules: {
		"consistent-return": 0,
		"no-unused-expressions": 0,
		"no-warning-comments": 0,
		"react/no-multi-comp": 0,
		"react/require-default-props": 0,
		"no-restricted-globals": 0,
		"react/no-danger": 0,
		"react/sort-prop-types": 0,
		"jsx-a11y/anchor-is-valid": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/label-has-for": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/no-autofocus": 0,
		"import/no-extraneous-dependencies": 2,
		"import/named": 2,
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"space-before-function-paren": ["error", "always"],
		"keyword-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"arrow-body-style": ["error", "as-needed"],
		"arrow-parens": ["error", "always"],
		"comma-spacing": [
			"error",
			{
				before: false,
				after: true,
			},
		],
		"object-curly-spacing": [
			"error",
			"always",
			{
				arraysInObjects: false,
			},
		],
		"template-curly-spacing": ["error", "always"],
		"comma-dangle": [
			"error",
			{
				arrays: "never",
				objects: "always",
				imports: "never",
				exports: "never",
				functions: "ignore",
			},
		],
		"block-spacing": ["error", "always"],
		"no-else-return": "error",
		"no-nested-ternary": "error",
		"require-await": "error",
		"arrow-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"prefer-const": "error",
		"no-var": "error",
		"no-use-before-define": "error",
		"linebreak-style": ["error", "unix"],
	},
};
