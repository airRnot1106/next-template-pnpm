const path = require('path');
const rootPath = path.resolve(__dirname, '../src/');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  features: {
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = rootPath;
    return config;
  },
};
