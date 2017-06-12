import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import Demo5 from './app/components/Demo5/Demo5';
import Demo6 from './app/components/Demo6/Demo6';

export default class demo extends Component{
  renderScene(route, navigator){
    switch(route.id){
      case 'demo5':
        return (<demo5 navigator={navigator} title="demo5" />)
      case 'demo6':
        return (<demo6 navigator={navigator} title="demo6" />)
    }
  }

  render(){
    return(
      <Navigator
        initialRoute={{id: 'demo5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('demo', () => demo);