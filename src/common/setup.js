import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native'
import Dimensions from 'Dimensions'
import Loading from './loading'
import ErrorMsg from './error-msg'

class Setup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ipText: null,
      modalVisible: false
    }
  }

  _renderConnectToIp(error) {
    return (
      <View style={!error ? styles.marginTop : null}>
          <Text style={styles.heading}>Enter your{"\n"}Raspberry Pi&#39;s{"\n"}IP address</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              autoFocus={true}
              onChangeText={(ipText) => this.setState({ipText})}
              value={this.state.ipText}
              />
          </View>
          <TouchableHighlight
            style={styles.save}
            underlayColor="#eeeeee"
            onPress={() => this.props.connectToMirror(this.state.ipText)} >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
    )
  }

  _renderConnectionMsg(connection) {
    return (
      <View>
          <Text style={[styles.heading, styles.connectionMsg]}>
            Make sure you are connected to wifi
          </Text>
      </View>
    )
  }

  _renderSetup(connection, error) {
    return (
      <View>
        {
          connection && connection === 'wifi' || connection === 'WIFI'
            ? this._renderConnectToIp(error)
            : this._renderConnectionMsg(connection)
        }
      </View>
    )
  }

  render() {
    const { connection, error, loading, resetIp } = this.props
    return (
      <View style={styles.container}>
        {error && <ErrorMsg />}
        {
          loading
            ? <Loading resetIp={resetIp}/>
            : this._renderSetup(connection, error)
        }
      </View>
    )
  }
}

export default Setup

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: '#3273f4',
    padding: 50
  },
  marginTop: {
    marginTop: 50
  },
  heading: {
    paddingTop: 25,
    fontSize: 36,
    fontWeight: '900',
    color: '#fff'
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  input: {
    alignSelf: 'stretch',
    height: 50,
    marginTop: 5,
    fontSize: 30,
    color: '#fff'
  },
  save: {
    height:45,
    marginTop: 20,
    padding :10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: '#FFB11E'
  },
  connectionMsg: {
    paddingTop: 100
  }
})
