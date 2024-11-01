import pkg from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

const { configs: eslintConfigs } = pkg;

export default [
	// Apply ESLint recommended configs
	eslintConfigs.recommended,
	{
		ignores: ['scripts/*']
	},

	// General settings for JavaScript, TypeScript, and Svelte files
	{
		files: ['**/*.{js,ts,svelte}'],
		plugins: {
			svelte: sveltePlugin,
			import: importPlugin,
			prettier: prettierPlugin,
			'@typescript-eslint': tsPlugin
		},
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: {
					ts: tsParser
				}
			}
		},
		rules: {
			'no-undef': 'off',
			eqeqeq: ['warn', 'smart'],
			'max-lines': ['error', { max: 300, skipBlankLines: true }],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'prettier/prettier': 'error',
			'no-unused-vars': 'off',
			'function-paren-newline': ['error', 'consistent'],
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'no-underscore-dangle': 0,
			'consistent-return': 0,
			'max-params': ['error', 3],
			'max-nested-callbacks': ['error', 3],
			'max-depth': ['error', 4],
			complexity: ['error', { max: 20, variant: 'modified' }],
			camelcase: 'off',
			'no-use-before-define': [
				'error',
				{
					functions: false,
					classes: true,
					variables: true,
					allowNamedExports: true
				}
			],
			'import/order': [
				'error',
				{
					groups: [
						'builtin', // Node's built-in modules (e.g., fs, path)
						'external', // External dependencies from node_modules
						'internal', // Aliased imports (you may have them in your Svelte project)
						'parent', // Imports from parent directories
						'sibling', // Imports from sibling directories
						'index', // Imports from index files (e.g., index.js, index.svelte)
						'type' // Type imports for TypeScript
					],
					'newlines-between': 'always', // Ensure there's always a new line between different groups
					pathGroups: [
						{
							pattern: '@sveltejs/**', // Group imports from Svelte ecosystem
							group: 'external',
							position: 'before'
						},
						{
							pattern: '@{app,components,stores,lib}/**', // Your internal aliases
							group: 'internal',
							position: 'before'
						}
					],
					alphabetize: {
						order: 'asc', // Alphabetical order for imports
						caseInsensitive: true // Case-insensitive sorting
					},
					pathGroupsExcludedImportTypes: ['type'] // Type imports will be handled separately
				}
			],
			'prefer-destructuring': [
				'error',
				{
					VariableDeclarator: {
						array: false,
						object: true
					},
					AssignmentExpression: {
						array: false,
						object: false
					}
				},
				{
					enforceForRenamedProperties: false
				}
			]
		}
	},

	// Specific settings for Svelte files
	{
		files: ['**/*.svelte'],
		plugins: {
			svelte: sveltePlugin
		},
		languageOptions: {
			parser: svelteParser
		},
		rules: {
			camelcase: [
				'error',
				{
					properties: 'never',
					ignoreImports: true,
					ignoreGlobals: true,
					allow: ['^([A-Z][a-z]+_)*[A-Z][a-z]+$']
				}
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: true,
					varsIgnorePattern: '^_', // Ignore variables that start with _
					argsIgnorePattern: '^_' // Ignore arguments that start with _
				}
			]
		}
	},

	// Specific settings for TypeScript files
	{
		files: ['**/*.ts'],
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		languageOptions: {
			parser: tsParser
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: true,
					varsIgnorePattern: '^_', // Ignore variables that start with _
					argsIgnorePattern: '^_' // Ignore arguments that start with _
				}
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['camelCase']
				},
				{
					selector: 'variable',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE']
				},
				{
					selector: 'function',
					format: ['camelCase', 'UPPER_CASE']
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
					filter: {
						regex: '^(?!.*_).*',
						match: true
					}
				},
				{
					selector: 'property',
					format: null
				},
				{
					selector: 'interface',
					format: ['PascalCase']
				},
				{
					selector: 'enum',
					format: ['PascalCase']
				},
				{
					selector: 'enumMember',
					format: ['UPPER_CASE']
				},
				{
					selector: 'import',
					format: null
				}
			]
		}
	},

	// Ignored directories and files
	{
		ignores: [
			'node_modules',
			'.aws',
			'.svelte-kit',
			'**/generated/**',
			'**/build/**',
			'**/playwright-report/**',
			'**/allure-report/**',
			'*.cjs',
			'tailwind.config.js'
		]
	}
];
