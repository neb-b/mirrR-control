import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ErrorMsg = () => {
  return (
    <View style={styles.errorWrapper}>
      <Text style={styles.errorText}>There was a problem connecting to the mirror</Text>
    </View>
  )
}

export default ErrorMsg

const styles = StyleSheet.create({
  errorWrapper: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#c83636',
    backgroundColor: '#ff8e8e'
  },
})
