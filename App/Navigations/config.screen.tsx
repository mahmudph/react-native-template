import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const optionsScreen = (title: string): StackNavigationOptions => {
  return {
    title: title,
    headerStyle: {
      backgroundColor: '#593BED',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (navigation: any) => (
      <View
        style={{
          justifyContent: 'space-around',
          alignContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 5,
        }}>
        <View style={{paddingHorizontal: 10}}>
          <TouchableNativeFeedback onPress={() => {}}>
            <Icon name="ios-mail" size={24} color="#FFF" />
          </TouchableNativeFeedback>
        </View>
        <View style={{paddingHorizontal: 10, marginRight: 20}}>
          <TouchableNativeFeedback onPress={() => {}}>
            <Icon name="md-notifications" size={30} color="#FFF" />
          </TouchableNativeFeedback>
        </View>
      </View>
    ),
    headerLeft: () => (
      <View style={{marginLeft: 15, padding: 10}}>
        <TouchableNativeFeedback>
          <Icon name="ios-menu" size={24} color="#FFF" />
        </TouchableNativeFeedback>
      </View>
    ),
  };
};
