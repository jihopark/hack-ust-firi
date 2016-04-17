
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TimePickerAndroid,
} from 'react-native';


//0:Full name, 1:CODE, 2:STOCK PRICe, 3:Change, 4:Close Date, 5:Category

const data = {
  "American Express": ["American Express Company",	"(NYSE:AXP)",	62.14,	"-0.37 (-0.59%)",	"Apr 15 - Close",	"Financials"],
  "Apple": ["Apple Inc.","(NASDAQ:AAPL)","109.85","-2.25 (-2.01%)","Apr 15 - Close","Technology"],
  "Boeing": ["Boeing Co","(NYSE:BA)","131.16","+0.31 (0.24%)","Apr 15 - Close","Industrials"],
  "Caterpillar": ["Caterpillar Inc.","(NYSE:CAT)","79.2","+0.15 (0.19%)","Apr 15 - Close","Industrials"],
  "Cisco Systems": ["Cisco Systems, Inc.","(NASDAQ:CSCO)","27.9","-0.35 (-1.24%)","Apr 15 - Close","Technology"],
  "Chevron" : ["Chevron Corporation","(NYSE:CVX)","97.2","-0.76 (-0.78%)","Apr 15 - Close","Energy"],
};
/*
var change = ["Dupont	E I Du Pont De Nemours & Co	(NYSE:DD)	65.24	+0.06 (0.09%)	Apr 15 - Close	Industrials",
"Exxon Mobil	Exxon Mobil Corporation	(NYSE:XOM)	84.97	-0.43 (-0.50%)	Apr 15 - Close	Energy",
"General Electric	General Electric Company	(NYSE:GE)	31.02	0.00 (0.00%)	Apr 15 - Close	Industrials",
"Goldman Sachs	Goldman Sachs Group Inc	(NYSE:GS)	158.57	-2.34 (-1.45%)	Apr 15 - Close	Financials",
"Home Depot	Home Depot Inc	(NYSE:HD)	134.99	+0.62 (0.46%)	Apr 15 - Close	Cyclical Consumer Goods & Services",
"International Business Machines	International Business Machines Corp.	(NYSE:IBM)	151.71	+0.55 (0.36%)	Apr 15 - Close	Technology",
"Intel	Intel Corporation	(NASDAQ:INTC)	31.46	-0.34 (-1.07%)	Apr 15 - Close	Technology",
"Johnson and Johnson	Johnson & Johnson	(NYSE:JNJ)	110.11	+0.31 (0.28%)	Apr 15 - Close	Healthcare",
"Cocacola	The Coca-Cola Co	(NYSE:KO)	46.09	+0.26 (0.57%)	Apr 15 - Close	Non-cyclical Consumer Goods & Services",]
*/

const fakePic = [require('./assets/3M.png'),require('./assets/2Y.png'),require('./assets/2Y-20.png'),require('./assets/2Y-20-40.png'),require('./assets/2Y.png')];

class CompanyContainer extends Component {
  componentDidMount(){

  }

  async showDatePicker(v, p) {
    if (p!=0){
      try {
        const {action, minute, hour} = await TimePickerAndroid.open();
        if (action === TimePickerAndroid.timeSetAction) {

        } else if (action === TimePickerAndroid.dismissedAction) {

        }

      } catch ({code, message}) {
        console.warn("Error"+message);
      }
    }
  }

  render(){
    var d = data[this.props.company];
    return this.props.company ? (<View style={{height: 500, alignSelf:'stretch'}}>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:12, textAlign:'center'}}>{d[5]}</Text>
          <Text style={{fontSize:20, textAlign:'center'}}>{d[0]}</Text>
          <Text style={{fontSize:16, textAlign:'center'}}>{d[1]} {d[4]}</Text>
          <View style={{flexDirection:'row', marginTop:25}}>
            <View style={{flex:1}}>
              <Text style={{fontSize:20, textAlign:'center'}}><Text style={{fontWeight:'bold', fontSize: 36}}>{d[2]}</Text> USD</Text>
              <Text style={{fontSize:20, textAlign:'center'}}>{d[3]}</Text>
            </View>
            <View style={{flex:1}}>
            </View>
          </View>
        </View>
        <View style={{flex:1,backgroundColor:'white', flexDirection: 'column'}}>
          <Picker
            style={{width:100}}
            selectedValue={"java"}
            onValueChange={this.showDatePicker.bind(this)}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <Image resizeMode={"cover"} source={fakePic[this.props.count%5]} style={{width:500}} />
        </View>
      </View>)
    : null;
  }
}

module.exports = CompanyContainer;
