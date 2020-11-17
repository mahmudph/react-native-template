import {StackScreenProps} from '@react-navigation/stack';
import {Routes} from 'config';
import AppContext from 'context';
import {props_screen} from 'mocks';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';

type S = {};
type P = StackScreenProps<props_screen, Routes.HOME>;

export default class Home extends Component<P, S> {
  static contextType = AppContext;
  componentDidMount() {
    this.props.route.params.screen_id;
  }
  render() {
    const theme = this.context;
    return (
      <View style={style.container}>
        <Text>Hello Word</Text>
      </View>
    );
  }
}
