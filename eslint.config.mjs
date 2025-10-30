// eslint.config.mjs
import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules', 'dist'],
  },

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        JSX: true,
        window: 'readonly',
        document: 'readonly',
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...prettier.rules,

      // Your custom rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',
    },

    env: {
      browser: true,
      node: true,
    },
  },
]
