import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ErrorMsg = () => (
  <View style={styles.errorWrapper}>
    <Text style={styles.errorText}>
      There was a problem connecting to the mirror
    </Text>
  </View>
)

export default ErrorMsg

const styles = StyleSheet.create({
  errorWrapper: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#c83636',
    backgroundColor: '#ff8e8e',
  },
  errorText: {
    fontWeight: '600',
    color: '#282828'
  }
})
