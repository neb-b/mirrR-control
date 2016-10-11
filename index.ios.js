import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/app';

class mirror_control extends Component {
  render() {
    return (
      <View>
        <App app="ios"/>
      </View>
    );
  }
}


AppRegistry.registerComponent('mirror_control', () => mirror_control);
