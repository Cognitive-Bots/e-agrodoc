import * as React from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import Constants from 'expo-constants';
const { useState } = React;
const fertilizerRecommendation = ({navigation}) => {
    const [count,setCount]=([0,0,0,0,0]);
  const [crop,setCrop]=("");
  return (
    <View >
      <Text >Get informed advice on fertilizer based on soil</Text>
      <View>
        <Text>Nitrogen</Text>
        <TextInput
          placeholder="Enter the value(Example:50)" onChange={(e)=>setCount(e[0].target.value)} required/>
        <Text>Phosporous</Text>
        <TextInput placeholder="Enter the value(Example:50)" onChange={(e)=>setCount(e[1].target.value)} required/>  
        <Text>Potassium</Text>
        <TextInput  placeholder="Enter the value(Example:50)" onChange={(e)=>setCount(e[2].target.value)} required/>
        <Text>ph level</Text>
        <TextInput placeholder="Enter the value" onChange={(e)=>setCount(e[3].target.value)} required/>
        <Text>Rainfall(in mm)</Text>
        <TextInput placeholder="Enter the value" onChange={(e)=>setCount(e[4].target.value)} required/>
        <select name ="Crop" id ="Crop" placeholder="Crop" onChange={(e)=>setCrop(e.target.value)}>
          <option value="" disabled selected>Select Crop</option>
          <option value="rice">rice</option>
          <option value="maize">Maize</option>
          <option value="chickpea">chickpea</option>
          <option value="kidneybeans">kidneybeans</option>
          <option value="pigeonpeas">pigeonpeas</option>
          <option value="mothbeans">mothbeans</option>
          <option value="mungbeans">mungbeans</option>
          <option value="blackgram">blackgram</option>
          <option value="lentil">lentil</option>
          <option value="banana">banana</option>
          <option value="pomegranate">pomegranate</option>
          <option value="mango">mango</option>
          <option value="grapes">grapes</option>
          <option value="watermelon">watermelon</option>
          <option value="muskmelon">muskmelon</option>
          <option value="apple">apple</option>
          <option value="orange">orange</option>
          <option value="papaya">papaya</option>
          <option value="coconut">coconut</option>
          <option value="cotton">cotton</option>
          <option value="jute">jute</option>
          <option value="coffee">coffee</option>
        </select>
        <input type="submit" value="Predict" />
        
      </View>
    </View>
)};

export default fertilizerRecommendation;
