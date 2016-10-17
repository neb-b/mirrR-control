import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import commonStyles from './common-styles'

const Loading = ({ resetIp }) => {
  console.log("reset", resetIp)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading components...</Text>
      <ActivityIndicator
        animating={true}
        size="large"
        color="#95fa2f" />
      <TouchableHighlight
        underlayColor="transparent"
        style={[commonStyles.button, styles.resetButton]}
        onPress={resetIp}>
        <Text style={[commonStyles.buttonText, styles.resetText]}>Reset IP</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    paddingBottom: 25,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
    color: '#fff'
  },
  resetText: {
    flex: 1,
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: '#95fa2f',
    fontWeight: '800',
    backgroundColor: 'transparent'
  }
})
