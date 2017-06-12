import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Demo6 extends Component{
  render(){
    return(
      <View>
        <Text>Details</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Demo6', () => Demo6);