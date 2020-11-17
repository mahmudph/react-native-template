import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {optionsScreen} from './config.screen';
import {Home, Splashscreen} from 'containers';
import {props_screen} from 'mocks';
import {ConfigApp} from 'config';

const ApplicationStack = createStackNavigator<props_screen>();
const AplicationNavigation = () => {
  return (
    <ApplicationStack.Navigator>
      <ApplicationStack.Screen
        name={ConfigApp.Routes.HOME}
        component={Home}
        options={optionsScreen('Home App')}
      />
      <ApplicationStack.Screen
        name={ConfigApp.Routes.SPLASHSCREEN}
        component={Splashscreen}
        options={optionsScreen('Home App')}
      />
      <ApplicationStack.Screen
        name={ConfigApp.Routes.SPLASHSCREEN}
        component={Home}
      />
    </ApplicationStack.Navigator>
  );
};
export default AplicationNavigation;
