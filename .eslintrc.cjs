module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'unused-imports',
    'tailwindcss',
  ],
  rules: {
    /* eslint */
    'arrow-body-style': 'off',
    /* typescript */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    /* react */
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    /* import */
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'pathGroups': [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/app/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/stores/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/providers/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/constants/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/libs/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'alphabetize': {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./*', '../*', '~/*', '~~/*'],
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            from: [
              './src/stores',
              './src/components/page',
              './src/components/feature',
            ],
            target: './src/components/base',
          },
          {
            from: [
              './src/stores',
              './src/components/page',
              './src/components/feature',
            ],
            target: './src/components/functional',
          },
          {
            from: ['./src/components/page'],
            target: './src/components/feature',
          },
          {
            from: ['./src/components/page/*.tsx'],
            target: './src/components/page',
          },
          {
            from: [
              './src/components/feature',
              './src/components/functional',
              './src/components/base',
            ],
            target: './src/app/**/page.tsx',
          },
        ],
      },
    ],
    /* tailwindcss */
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        config: 'tailwind.config.cjs',
      },
    ],
    'tailwindcss/classnames-order': 'off',
  },
};
