import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {optionsScreen} from 'routes/config.screen';
import Home from 'containers/Home/index';

const ApplicationStack = createStackNavigator();
const AplicationNavigation = () => {
  return (
    <ApplicationStack.Navigator>
      <ApplicationStack.Screen
        name="Home"
        component={Home}
        options={optionsScreen('Home App')}
      />
      <ApplicationStack.Screen name="Notifications" component={Home} />
    </ApplicationStack.Navigator>
  );
};
export default AplicationNavigation;
