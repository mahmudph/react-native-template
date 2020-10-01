import Navigation from 'routes/index';
import React, {Component} from 'react';
import {NavigationContainer,  DefaultTheme } from "@react-navigation/native";
import { State } from 'react-native-webview/lib/WebViewTypes';


const Custom_theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: DefaultTheme.colors.primary,
  },
};

export default class App extends Component<State> {
  render() {
    return (
      <NavigationContainer theme={Custom_theme}>
        <Navigation />
      </NavigationContainer>
    );
  }
}
