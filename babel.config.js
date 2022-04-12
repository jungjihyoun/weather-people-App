module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
        ],
        alias: {
          '@': './App',
          '@components': './App/components',
          '@apollo': './App/apollo',
          '@constant': './App/constant',
          '@graphql': './App/graphql',
          '@store': './App/store',
          '@containers': './App/containers',
          '@screens': './App/screens',
          '@utils': './App/utils',
          '@styles': './App/styles',
        },
      },
    ],
  ],
};
