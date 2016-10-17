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
import cStyles from './common-styles'

class Setup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ipText: null,
      modalVisible: false
    }
  }

  _renderConnectToIp() {
    const { app } = this.props
    const ios = app === 'ios'
    const fontBold =  ios ? cStyles.iosFontBold : ''
    const fontSemiBold = ios ? cStyles.iosFontSemiBold : ''
    return (
      <View>
        {
          this.props.error && (
            <View style={styles.error}>
              <Text style={[styles.errorMsg, fontSemiBold]}>There was a problem connecting to the mirror.</Text>
            </View>
          )

        }
        <Text style={[styles.heading, fontBold]}>Enter your{"\n"}Raspberry Pi&#39;s{"\n"}IP address</Text>
        <View style={ios ? styles.inputWrapper : styles.inputWrapper}>
          <TextInput
            style={ios ? styles.iosInput : styles.androidInput}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            autoFocus={true}
            onChangeText={(ipText) => this.setState({ipText})}
            value={this.state.ipText}
            />
        </View>
        <TouchableHighlight
          style={[cStyles.button, cStyles.buttonInverse]}
          underlayColor="#eeeeee"
          onPress={() => this.props.connectToMirror(this.state.ipText)} >
          <Text style={[cStyles.buttonText, cStyles.colorPrimary, cStyles.semiBold]}>Save</Text>
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
    const { connection, loading, resetIp } = this.props
    return (
      <View style={[styles.container, cStyles.bgPrimary]}>
        {
          loading
            ? <Loading resetIp={resetIp}/>
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
    padding: 50,
  },
  connectionMsg: {
    paddingTop: 100
  },
  error: {
    alignSelf: 'stretch',
    backgroundColor: '#ffa9a1',
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#df3c3c',
    marginBottom: -55

  },
  errorMsg: {
    padding: 10,
    backgroundColor: 'transparent',
    color: '#df3c3c'
  },
  heading: {
    marginTop: 100,
    fontSize: 36,
    color: '#fff',
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

})
