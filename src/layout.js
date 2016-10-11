import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native'
import Dimensions from 'Dimensions'
import ComponentsList from './common/components-list'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  _renderTop() {
    return (
      <View style={this.props.app === 'ios' ? styles.iosStatusBar : styles.androidStatusBar}>
        <Text style={this.props.app === 'ios' ? styles.iosStatusText : styles.androidStatusText}>Mirror Control</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.layout}>
        {this._renderTop()}
        <ComponentsList
          components={this.props.components}
          toggleComponent={this.props.toggleComponent}/>
      </View>
    )
  }
}

export default Layout

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width,
    height
  },
  iosStatusBar: {
    height: 70,
    backgroundColor: '#2067F3',
    marginBottom: 10
  },
  androidStatusBar: {
    height: 60,
    backgroundColor: '#2067F3'
  },
  iosStatusText: {
    padding: 30,
    paddingBottom: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  androidStatusText: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingBottom: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
  },

})
