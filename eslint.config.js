import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ignore 'dist' folder
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // Using globals for browser environment
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript features
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
        sourceType: 'module', // Allow using ES modules
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
    plugins: {
      react, // React plugin for linting
      'react-hooks': reactHooks, // React Hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off', // Allow target="_blank" without rel
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: false }, // Allow exporting constant components
      ],
    },
  },
];
