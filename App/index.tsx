import React, {Component} from 'react';
import Navigation from 'routes';
import {ConfigApp, NavigationTheme} from 'config';
import AppContext from './context/index';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends Component {
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
