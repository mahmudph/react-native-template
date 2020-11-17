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
          appModels: './App/Models/index',
          appMocks: './App/Mocks/index',
          appAssets: './App/Assets/index',
          appConfig: './App/Config/index',
          appUtils: './App/Utils/index',
          appContext: './App/context/index',
          appRoutes: './App/Navigations/index',
          appContainers: './App/Containers/index',
          appComponents: './App/Components/index',
          appHttp: './App/Services/index',
        },
      },
    ],
  ],
};
