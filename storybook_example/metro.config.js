const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const withStorybook = require('@storybook/react-native/metro/withStorybook'); 
module.exports = withStorybook(config); 
