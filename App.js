/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <> 
    <Image source={require('./image/1.png')} style={{width:50,height:50,paddingHorizontal:80,marginHorizontal:120,marginVertical: 20}}></Image>
     <View style= {{backgroundColor: 'white', flex: 1, flexDirection: 'row',paddingTop: 90}}>

      <TouchableOpacity style={{backgroundColor: 'green' ,flex: 1,height: 100, marginHorizontal: 10,marginLeft: 20,borderRadius: 10,justifyContent: 'center'}} onPress={()=>{
        alert('salad')
      }}>
       <View>
         <Text style={{textAlign: 'center',color: 'white',fontSize: 25,}}>Salad</Text>
       </View>      
       </TouchableOpacity>

       <TouchableOpacity style={{backgroundColor: 'white' ,flex: 1,height: 100, marginHorizontal: 10, borderRadius: 10,justifyContent: 'center',borderWidth: 2,borderColor: 'gray'}} onPress={()=>{
        alert('pizza')
      }}>
       <View >
       <Text style={{textAlign: 'center',color: 'black',fontSize: 25,}}>Pizza</Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity style={{backgroundColor: 'red'   ,flex: 1,height: 100, marginHorizontal: 10,marginRight:20,borderRadius: 10,justifyContent: 'center'}} onPress={()=>{
        alert('drink')
      }}>
       <View >
       <Text style={{textAlign: 'center',color: 'white',fontSize: 25,}}>Drink</Text>
       </View>
       </TouchableOpacity>
     </View> 
    </>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

export default App;
