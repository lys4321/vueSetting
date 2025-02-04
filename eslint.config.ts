import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier'; // Prettier ��Ģ
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier �÷�����

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		files: ['src/**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	{
		plugins: {
			prettier: prettierPlugin,
		}, // Prettier �÷����� �߰�
		rules: {
			...prettier.rules, // Prettier ��Ģ ��������
			'prettier/prettier': 'error', // Prettier�� ESLint ������ ǥ��
		},
	},
	{
		ignores: ['dist/**/*'],
	},
];
