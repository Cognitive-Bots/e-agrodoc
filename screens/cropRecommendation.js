import * as React from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
// import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function CropRecommendation() {
  return (
    <View >
      <Text >Find out the most suitable crop to grow in your farm</Text>
      <View>
        <Text>Nitrogen</Text>
        <TextInput 
          placeholder="Enter the value(Example:50)" />
        <Text>Phosporous</Text>
        <TextInput
          placeholder="Enter the value(Example:50)"
        />
        <Text>Potassium</Text>
        <TextInput 
          placeholder="Enter the value(Example:50)" />
        <Text>ph level</Text>
        <TextInput
          placeholder="Enter the value"
        />
        <Text>Rainfall(in mm)</Text>
        <TextInput 
          placeholder="Enter the value" />
        <Text>State</Text>
        <select name ="state" id ="state" placeholder="state">
          <option value="" disabled selected>Select State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <button value="Predict">Predict</button>
      </View>
    </View>
)};