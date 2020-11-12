import Navigation from 'routes/index';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {State} from 'react-native-webview/lib/WebViewTypes';
import {NavigationTheme} from 'config/theme';
import AppContext from './context/index';
import {ConfigApp} from './Config';

export default class App extends Component<State> {
  render() {
    return (
      <NavigationContainer theme={NavigationTheme}>
        <AppContext.Provider value={ConfigApp}>
          <Navigation />
        </AppContext.Provider>
      </NavigationContainer>
    );
  }
}
