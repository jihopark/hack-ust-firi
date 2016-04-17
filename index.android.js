/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import Voice from 'react-native-android-voice';
import axios from 'axios'
import tts from 'react-native-android-speech';

import CompanyContainer from './CompanyContainer.js';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


class firi extends Component {
  constructor(){
    super();
    this.state ={
      company: "Apple",
      listening: false,
      count: 0,
    };

    this.sendToAPIAI = this.sendToAPIAI.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.speakOut = this.speakOut.bind(this);
  }

  componentDidMount() {
    axios.defaults.baseURL = 'https://api.api.ai/v1/';
    axios.defaults.headers.common['Authorization'] = "Bearer 788301c331bf4fa796fe7973dbbf5222";
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
      console.log("pick" + e.speech.split("\n")[0]);
      this.sendToAPIAI(e.speech.split("\n")[0]);
    }
  }

  sendToAPIAI(text) {
    text = text.replace('&',"and");
    console.log("/query?lang=EN&query="+text);
    axios.get('/query?lang=EN&query='+text)
    .then(this.handleResponse)
    .catch(function (response) {
      console.log(response);
    });
  }

  handleResponse(response){
    console.log(response);
    var intent = response.data.result.metadata.intentName;
    console.log("intent" + intent);
    switch (intent) {
      case "search_company":
        var company = response.data.result.parameters.company;
        console.log("search " + company);
        this.setState({company:company, count: 0});
        break;
      case "change_window":
      case "clear_chart":
      case "add_sma":
        this.setState({count:this.state.count+1});
        break;
      default:
        this.speakOut("Sorry, I don't understand.");
    }

    var speech = response.data.result.speech;
    if (speech)
      this.speakOut(speech);
  }

  speakOut(text) {
    console.log("Speaking " + text);
    tts.speak({
        text: text,
        pitch:1.0,
    }).then(isSpeaking=>{
        console.log(isSpeaking);
    }).catch(error=>{
        console.log(error)
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.companyText}>{this.state.company || "Say \"search\" company"}</Text>
        <CompanyContainer
          company={this.state.company} count={this.state.count}/>
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
    marginTop: 5,
  },
  companyText:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign:'center',
  },
});

AppRegistry.registerComponent('firi', () => firi);
