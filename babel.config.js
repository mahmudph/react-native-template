module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./App/'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.css',
        ],
        alias: {
          models: './App/Models/index',
          mocks: './App/Mocks/index',
          assets: './App/Assets/index',
          config: './App/Config/index',
          utils: './App/Utils/index',
          context: './App/context/index',
          routes: './App/Navigations/index',
          containers: './App/Containers/index',
          components: './App/Components/index',
          http: './App/Services/index',
        },
      },
    ],
  ],
};
