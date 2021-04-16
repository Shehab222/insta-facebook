import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook from './screens/fb';
import Instagram from './screens/insta';

export default function App() {
  return (
      <AppContainer/>
  );
}


const TabNavigator = createBottomTabNavigator({
  facebook: {screen: Facebook},
  instagram:{screen: Instagram}
})
const AppContainer = createAppContainer(TabNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
