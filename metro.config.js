/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  assets: ['./App/assets/fonts'],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs'],
  },
};
