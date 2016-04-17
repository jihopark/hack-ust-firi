
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TimePickerAndroid,
} from 'react-native';

const data = [
"American Express	American Express Company	(NYSE:AXP)	62.14	-0.37 (-0.59%)	Apr 15 - Close	Financials",
"Apple	Apple Inc.	(NASDAQ:AAPL)	109.85	-2.25 (-2.01%)	Apr 15 - Close	Technology",
"Boeing	Boeing Co	(NYSE:BA)	131.16	+0.31 (0.24%)	Apr 15 - Close	Industrials",
"Caterpillar	Caterpillar Inc.	(NYSE:CAT)	79.2	+0.15 (0.19%)	Apr 15 - Close	Industrials",
"Cisco Systems	Cisco Systems, Inc.	(NASDAQ:CSCO)	27.9	-0.35 (-1.24%)	Apr 15 - Close	Technology",
"Chevron	Chevron Corporation	(NYSE:CVX)	97.2	-0.76 (-0.78%)	Apr 15 - Close	Energy",
"Dupont	E I Du Pont De Nemours & Co	(NYSE:DD)	65.24	+0.06 (0.09%)	Apr 15 - Close	Industrials",
"Exxon Mobil	Exxon Mobil Corporation	(NYSE:XOM)	84.97	-0.43 (-0.50%)	Apr 15 - Close	Energy",
"General Electric	General Electric Company	(NYSE:GE)	31.02	0.00 (0.00%)	Apr 15 - Close	Industrials",
"Goldman Sachs	Goldman Sachs Group Inc	(NYSE:GS)	158.57	-2.34 (-1.45%)	Apr 15 - Close	Financials",
"Home Depot	Home Depot Inc	(NYSE:HD)	134.99	+0.62 (0.46%)	Apr 15 - Close	Cyclical Consumer Goods & Services",
"International Business Machines	International Business Machines Corp.	(NYSE:IBM)	151.71	+0.55 (0.36%)	Apr 15 - Close	Technology",
"Intel	Intel Corporation	(NASDAQ:INTC)	31.46	-0.34 (-1.07%)	Apr 15 - Close	Technology",
"Johnson and Johnson	Johnson & Johnson	(NYSE:JNJ)	110.11	+0.31 (0.28%)	Apr 15 - Close	Healthcare",
"Cocacola	The Coca-Cola Co	(NYSE:KO)	46.09	+0.26 (0.57%)	Apr 15 - Close	Non-cyclical Consumer Goods & Services",
"JPMorgan Chase	JPMorgan Chase & Co.	(NYSE:JPM)	61.88	-0.71 (-1.13%)	Apr 15 - Close	Financials",
"McDonald's	McDonald's Corporation	(NYSE:MCD)	127.79	+0.28 (0.22%)	Apr 15 - Close	Cyclical Consumer Goods & Services",
"3M	3M Co	(NYSE:MMM)	168.78	+0.59(0.35%)	Apr 15 - Close	Industrials",
"Merck	Merck & Co., Inc.	(NYSE:MRK)	56.12	-0.33 (-0.58%)	Apr 15 - Close	Healthcare",
"Microsoft	Microsoft Corporation	(NASDAQ:MSFT)	55.65	+0.29 (0.52%)	Apr 15 - Close	Technology",
"Nike	Nike Inc	(NYSE:NKE)	59.51	+0.03 (0.05%)	Apr 15 - Close	Cyclical Consumer Goods & Services",
"Pfizer	Pfizer Inc.	(NYSE:PFE)	32.5	-0.15 (-0.46%)	Apr 15 - Close	Healthcare",
"Procter and Gamble	Procter & Gamble Co	(NYSE:PG)	82.29	+0.28 (0.34%)	Apr 15 - Close	Non-Cyclical Consumer Goods & Services",
"Travelers	Travelers Companies Inc	(NYSE:TRV)	116.23	+0.87 (0.75%)	Apr 15 - Close	Financials",
"United Health	UnitedHealth Group Inc	(NYSE:UNH)	127.33	-0.65 (-0.51%)	Apr 15 - Close	Healthcare",
"Verizon	Verizon Communications Inc.	(NYSE:VZ)	51.34	-0.02 (-0.04%)	Apr 15 - Close	Telecommunications Services",
"Visa	Visa Inc	(NYSE:V)	80.07	-0.26 (-0.32%)	Apr 15 - Close	Industrials",
"Wal Mart	Wal-Mart Stores, Inc.	(NYSE:WMT)	69.08	+0.28 (0.41%)	Apr 15 - Close	Cyclical Consumer Goods & Services",
"Walt Disney	Walt Disney Co	(NYSE:DIS)	98.58	-0.05 (-0.05%)	Apr 15 - Close	Cyclical Consumer Goods & Services"];

const fakePic = [require('./assets/3M.png'),require('./assets/2Y.png'),require('./assets/2Y-20.png'),require('./assets/2Y-20-40.png'),require('./assets/2Y.png')];
const chartImage = {
  "American Express": require('./assets/chart/American Express.png'),
  "Apple": require('./assets/chart/Apple.png'),
  "Boeing": require('./assets/chart/Boeing.png'),
  "Caterpillar": require('./assets/chart/Caterpillar.png'),
  "Cisco Systems": require('./assets/chart/Cisco Systems.png'),
  "Chevron": require('./assets/chart/Chevron.png'),
  "Dupont": require('./assets/chart/Dupont.png'),
  "Exxon Mobil": require('./assets/chart/Exxon Mobil.png'),
  "General Electric": require('./assets/chart/General Electrics.png'),
  "Goldman Sachs": require('./assets/chart/Goldman Sachs.png'),
  "Home Depot": require('./assets/chart/Home Depot.png'),
  "International Business Machines": require('./assets/chart/IBM.png'),
  "Intel": require('./assets/chart/Intel.png'),
  "Johnson and Johnson": require('./assets/chart/Johnson&Johnson.png'),
  "Cocacola": require('./assets/chart/CocaCola.png'),
  "JPMorgan Chase": require('./assets/chart/JPMorgan.png'),
  "McDonald's": require('./assets/chart/McDonald.png'),
  "3M": require('./assets/chart/3M.png'),
  "Merck": require('./assets/chart/Merck.png'),
  "Microsoft": require('./assets/chart/Microsoft.png'),
  "Nike": require('./assets/chart/Nike.png'),
  "Pfizer": require('./assets/chart/Pfizer.png'),
  "Procter and Gamble": require('./assets/chart/Procter&Gamble.png'),
  "Travelers": require('./assets/chart/Travelers.png'),
  "United Health": require('./assets/chart/UnitedHealth.png'),
  "Verizon": require('./assets/chart/Verizon.png'),
  "Visa": require('./assets/chart/Visa.png'),
  "Wal Mart": require('./assets/chart/WalMart.png'),
  "Walt Disney": require('./assets/chart/Walt Disney.png')
};


class CompanyContainer extends Component {
  componentWillMount(){
    this.data = this.setData(data);
  }

  setData(data){
    console.log(data);
    var tmp = {};
    for (var i=0;i<data.length;i++) {
      var d = data[i].split("\t");
      tmp[d[0]] = d;
    }
    console.log(tmp);
    return tmp;
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

  //0:Full name, 1:CODE, 2:STOCK PRICe, 3:Change, 4:Close Date, 5:Category

  render(){
    console.log("Data");
    console.log(this.data);
    var d = this.data[this.props.company];
    return this.props.company ? (<View style={{height: 500, alignSelf:'stretch'}}>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:12, textAlign:'center'}}>{d[6]}</Text>
          <Text style={{fontSize:20, textAlign:'center'}}>{d[1]}</Text>
          <Text style={{fontSize:16, textAlign:'center'}}>{d[2]} {d[5]}</Text>
          <View style={{flexDirection:'row', marginTop:25, alignItems:'center'}}>
            <View style={{flex:2}}>
              <Text style={{fontSize:20, textAlign:'center'}}><Text style={{fontWeight:'bold', fontSize: 36}}>{d[3]}</Text> USD</Text>
              <Text style={{fontSize:20, textAlign:'center'}}>{d[4]}</Text>
            </View>
            <View style={{flex:3}}>
              <Image source={chartImage[d[0]]} style={{width: 200, height: 100, resizeMode: "contain", alignSelf:'center', justifyContent:'center'}}/>
            </View>
          </View>
        </View>
        <View style={{flex:1,backgroundColor:'white', flexDirection: 'column'}}>
          <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems:'center'}} >
            <Text style={{fontWeight:'bold'}}>Overview</Text>
            <Text>Price/Charts</Text>
            <Text>Financials</Text>
            <Text>News</Text>
            <Text>Debate</Text>
            <Picker
              style={{width:20}}
              selectedValue={""}
              onValueChange={this.showDatePicker.bind(this)}>
              <Picker.Item label={"Simple Moving Average"} value={"Simple Moving Average"} />
              <Picker.Item label={"Exponential Moving Average"} value={"Exponential Moving Average"} />
              <Picker.Item label={"Bollinger Bands"} value={"Bollinger Bands"} />
              <Picker.Item label={"Volume"} value={"Volume"} />
              <Picker.Item label={"Volatility"} value={"Volatility"} />
              <Picker.Item label={"Benchmarking Index"} value={"Benchmarking Index"} />
            </Picker>
          </View>
          <Image resizeMode={"cover"} source={fakePic[this.props.count%5]} style={{width:500}} />
        </View>
      </View>)
    : null;
  }
}

module.exports = CompanyContainer;
