import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Demo2 from './app/components/Demo2/Demo2'
export default class demo extends Component{
  render(){
    return(
      <View>
        <Demo2 />
      </View>
    );
  }
}

AppRegistry.registerComponent('demo', () => demo);