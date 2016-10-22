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

class Setup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ipText: null,
      modalVisible: false
    }
  }

  _renderConnectToIp() {
    return (
      <View>
          <Text style={styles.heading}>Enter your{"\n"}Raspberry Pi&#39;s{"\n"}IP address</Text>
          <View style={this.props.app === 'ios' ? styles.inputWrapper : styles.inputWrapper}>
            <TextInput
              style={this.props.app === 'ios' ? styles.iosInput : styles.androidInput}
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
        {
          connection
            ? <Text style={[styles.heading, styles.connectionMsg]}>Make sure you are connected to wifi</Text>
            : null
        }
      </View>
    )
  }

  _renderSetup(connection) {
    return (
      <View>
        {
          connection && connection === 'wifi' || connection === 'WIFI'
            ? this._renderConnectToIp()
            : this._renderConnectionMsg(connection)
        }
      </View>
    )
  }

  render() {
    const { connection, loading } = this.props
    return (
      <View style={styles.container}>
        {
          loading
            ? <Loading />
            : this._renderSetup(connection)
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
    padding: 50,
    paddingTop: 100
  },
  heading: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff'
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  iosInput: {
    alignSelf: 'stretch',
    height: 50,
    marginTop: 5,
    fontSize: 30,
    color: '#fff'
  },
  androidInput: {
    alignSelf: 'stretch',
    height: 70,
    marginTop: 5,
    fontSize: 30,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
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
