module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
        'module-resolver',
        {
          root: ['./App/'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            "config": "./App/Config/",
            "utils" : "./App/Utils/",
            "routes" : './App/Navigations/',
            "containers": "./App/Containers/",
            "components": "./App/Components/",
            "http" : "./App/Services/",
          },
        }
      ]
 ]
};
