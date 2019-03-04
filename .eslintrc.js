module.exports = {
	extends: [
		'kswedberg',
	],
	env: {
		browser: false,
		commonjs: true,
		es6: true,
		node: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	rules: {
		'no-undef': 'warn',
		'no-unreachable': 'warn',
		// 'no-unused-vars': 'warn',
		'valid-typeof': 'warn',
	}
};
