import {StackScreenProps} from '@react-navigation/stack';
import AppContext from 'App/context';
import Routes from 'config/routes';
import {props_screen} from 'mocks/props_screen';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';



type P = StackScreenProps<props_screen, Routes.HOME>;
type S = {};

export default class Home extends Component<P, S> {
  static contextType = AppContext;
  render() {
    const theme = this.context;
    return (
      <View>
        <Text>Hello Word</Text>
      </View>
    );
  }
}
