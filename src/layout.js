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
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>Mirror Control</Text>
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
  statusBar: {
    backgroundColor: '#3273f4',
    height: 70,
    marginBottom: 10
  },
  statusBarText: {
    padding: 30,
    paddingBottom: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  }
})
