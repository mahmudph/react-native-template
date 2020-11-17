import React from 'react';
import {ConfigApp} from 'appConfig';
import {optionsScreen} from './config.screen';
import {Home, Splashscreen} from 'appContainers';
import {createStackNavigator} from '@react-navigation/stack';
import {props_screen} from 'types/props_screen';

/* create temp */
const ApplicationStack = createStackNavigator<props_screen>();

/* set appication navigation */
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
    </ApplicationStack.Navigator>
  );
};
export default AplicationNavigation;
