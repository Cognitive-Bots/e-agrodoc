import * as React from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [count1,setCount1]=[0];
  const [count2,setCount2]=[0];
  const [count3,setCount3]=[0];
  const [count4,setCount4]=[0];
  const [count5,setCount5]=[0];
  const [count6,setCount6]=[0];
  return (
    <View style={{flex:1,justifyContent:"center",backgroundColor:"#fff", alignItems:"center"}}>
    <View style={{width:200,height:500,backgroundColor:"yellow",padding:50}}>
     <View >
      <Text >Find out the most suitable crop to grow in your farm</Text>
      <View>
        <Text>Nitrogen</Text>
        <TextInput 
          placeholder="Enter the value(Example:50)"  onChange={(count1)=>setCount1(count1)}/>
        <Text>Phosporous</Text>
        <TextInput
          placeholder="Enter the value(Example:50)"  onChange={(count2)=>setCount2(count2)}
        />
        <Text>Potassium</Text>
        <TextInput 
          placeholder="Enter the value(Example:50)"  onChange={(count3)=>setCount3(count3)}/>
        <Text>ph level</Text>
        <TextInput
          placeholder="Enter the value"  onChange={(count4)=>setCount4(count4)}
        />
        <Text>Rainfall(in mm)</Text>
        <TextInput 
          placeholder="Enter the value"  onChange={(count5)=>setCount5(count5)}/>
        <button value="Predict">Predict</button>
        <button onSubmit={console.log(count1,count2,count3,count4,count5)}>Submit</button>
      </View>
    </View>
      </View>
    </View>
)};
