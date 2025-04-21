const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

/** @type {import('metro-config').MetroConfig} */
const config = mergeConfig(getDefaultConfig(__dirname), {
  // Add custom Metro configurations here (if any)
});

module.exports = withNativeWind(config, {
  input: './global.css', // Ensure this file exists
});
