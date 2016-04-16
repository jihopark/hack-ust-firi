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
  Image,
  View
} from 'react-native';


class firi extends Component {
  constructor(){
    super();
    this.state ={
      company: "",
      listening: false,
    };
  }
  onPress(e){
    this.setState({listening:true});
    Voice.startSpeech('en');
  }

  onEnd(e) {
    this.setState({listening:false});
  }

  onResults(e) {
    if (e.speech) {
      console.log(e.speech);
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.companyText}>{this.state.company || "Select company (DowJones)"}</Text>
        <View style={styles.roundbutton}>
          <Voice
            onPress={this.onPress.bind(this)}
            onEnd={this.onEnd.bind(this)}
            onResults={this.onResults.bind(this)}>
            {
              this.state.listening ?
              <Image source={require('./assets/loading.png')} style={{width:40, height:40}}/>
              :
              <Image source={require('./assets/voice_icon.png')} style={{width:40, height:40}}/>
            }
          </Voice>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  roundbutton: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    marginBottom: 20,
  },
  companyText:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

AppRegistry.registerComponent('firi', () => firi);
