import * as React from 'react';
import 'cities.js';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
// import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function CropRecommendation() {
  const [count,setCount]=([0,0,0,0,0]);
  const [state,setState]=("");
  return (
    <View >
      <Text >Find out the most suitable crop to grow in your farm</Text>
      <View>
        <Text>Nitrogen</Text>
        <TextInput 
          placeholder="Enter the value(Example:50)"  onChange={(e)=>setCount(e[0].target.value)}/>
        <Text>Phosporous</Text>
        <TextInput
          placeholder="Enter the value(Example:50)"  onChange={(e)=>setCount(e[1].target.value)}
        />
        <Text>Potassium</Text>
        <TextInput 
          placeholder="Enter the value(Example:50)"  onChange={(e)=>setCount(e[2].target.value)}/>
        <Text>ph level</Text>
        <TextInput
          placeholder="Enter the value"  onChange={(e)=>setCount(e[3].target.value)}
        />
        <Text>Rainfall(in mm)</Text>
        <TextInput 
          placeholder="Enter the value"  onChange={(e)=>setCount(e[4].target.value)}/>
        <Text>State</Text>
        <select onchange="print_city('state', this.selectedIndex);" id="sts" name ="stt" class="form-control" required></select>
        <select id ="state" class="form-control" required></select>
        <script language="javascript">print_state("sts");</script>
        <button value="Predict">Predict</button>
      </View>
    </View>
)};
