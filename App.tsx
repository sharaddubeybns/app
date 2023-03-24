import  React, {Component} from 'react';
import {Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import About from './components/About';
import ContectUs from './components/ContectUs';


export default class NavigationDrawerExample extends Component{
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center',  justifyContent: 'center', }}>
      <Text style={{fontSize:30, color:'green' }}>Article Screen</Text>
    </View>
    );
  }
  
}
