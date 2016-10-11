import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading components...</Text>
      <ActivityIndicator
        animating={true}
        size="large"
        color="#95fa2f" />
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
  }
})
