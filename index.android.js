/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import Voice from 'react-native-android-voice';


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';


class firi extends Component {
  constructor(){
    super();
    this.state ={
      result: ""
    };
  }
  onPress(e){
    Voice.startSpeech('en');
  }

  onResults(e) {
    if (e.speech) {
      this.setState({result:e.speech});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Voice
          onPress={this.onPress.bind(this)}
          onResults={this.onResults.bind(this)}>
          <Text></Text>
        </Voice>
        <Text>{this.state.result || "Say Something"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('firi', () => firi);
