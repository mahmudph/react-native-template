import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Routes} from 'appConfig';
import AppContext from 'appContext';
import {props_screen} from 'types/props_screen';
import {StackScreenProps} from '@react-navigation/stack';
import style from './style';

type S = {};
type P = StackScreenProps<props_screen, Routes.HOME>;

export default class Home extends Component<P, S> {
  static contextType = AppContext;
  componentDidMount() {}
  render() {
    const theme = this.context;
    return (
      <View style={style.container}>
        <Text>Hello Word</Text>
      </View>
    );
  }
}
