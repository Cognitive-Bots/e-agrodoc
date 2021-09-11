import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} 
        onPress={()=>{alert("Crop")}}>
          <Image source={{ uri: ""}}
          style={{
                    height: 300,
                    width: 350,
                    borderColor: "gray",
                    // borderWidth: 250
                }}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
        onPress={()=>{alert("Fertilizer")}}>
          <Image source={{ uri: ""}}
          style={{
                    height: 300,
                    width: 350,
                    borderColor: "gray",
                    // borderWidth: 250
                }}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} 
        onPress={()=>{alert("Disease")}}>
          <Image source={{ uri: ""}}
          style={{
                    height: 300,
                    width: 350,
                    borderColor: "gray",
                    // borderWidth: 250
                }}/>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 10,
    // padding: 10,
    marginBottom: 20,
    // shadowColor: '#303838',
    // shadowOffset: { width: 10, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});