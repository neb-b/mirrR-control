import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const Loading = ({ resetIp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading components...</Text>
      <ActivityIndicator
        animating={true}
        size="large"
        color="#95fa2f" />
      <TouchableHighlight onPress={resetIp}>
        <Text style={styles.resetIp}>Reset IP</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100
  },
  text: {
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
    color: 'white'
  },
  resetIp: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '800',
    color: '#95fa2f'
  }
})
