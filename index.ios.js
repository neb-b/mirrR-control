import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/app';

class mirrRControl extends Component {
  render() {
    return (
      <View>
        <App app="ios"/>
      </View>
    );
  }
}


AppRegistry.registerComponent('mirrRControl', () => mirrRControl);
