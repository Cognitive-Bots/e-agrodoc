import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
// import { NavigationContainer } from 'react-navigation';
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator} from 'react-navigation-stack';
import HomeStack from "../routes/homeStack";
const HomeScreen = ({navigatation}) => {
  var navDiseaseDetection = (navigatation) => {
    navigation.navigate('DiseaseDetection');
  }
  return (
    <View style={styles.container}>
      {/* <HomeStack /> */}
      <ScrollView>
        <TouchableOpacity style={styles.button}
          // onPress={() => { alert("Crop") }}>
          // onPress={(navigation) => { navigation.navigate('diseaseDetection') }}>
          onPress={() => navDiseaseDetection()}>
          <Image source={{ uri: "" }}
            style={{
              height: 300,
              width: 350,
              borderColor: "gray",
              // borderWidth: 250
            }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          // onPress={() => { alert("Fertilizer") }}>
          onPress={(navigation) => { navigation.navigate('cropRecommendation') }}>
          <Image source={{ uri: "" }}
            style={{
              height: 300,
              width: 350,
              borderColor: "gray",
              // borderWidth: 250
            }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          // onPress={() => { alert("Disease") }}>
          onPress={(navigatation) => { navigation.navigate('fertilizerRecommendation') }}>
          <Image source={{ uri: "" }}
            style={{
              height: 300,
              width: 350,
              borderColor: "gray",
              // borderWidth: 250
            }} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
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

export default HomeScreen;