import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/app';

class mirrr_control extends Component {
  render() {
    return (
      <View>
        <App app="android"/>
      </View>
    );
  }
}


AppRegistry.registerComponent('mirrr_control', () => mirrr_control);
