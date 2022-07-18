import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import disease_detection from "../assets/detection.jpg";
import crop_recommendation from "../assets/recommendation.jpg";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate.openDrawer;
              console.log(navigation);
              navigation.navigate("HomeStack", {
                screen: "disease_detection",
                inital: false,
              });
            }}
          >
            <Image
              source={disease_detection}
              style={{
                height: 300,
                width: 350,
                borderColor: "black",
                borderWidth: 2,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("HomeStack", {
                screen: "crop_recommendation",
                inital: false,
              });
            }}
          >
            <Image
              source={crop_recommendation}
              style={{
                height: 300,
                width: 350,
                borderColor: "black",
                borderWidth: 2,
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fdf6e3",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 10,
    marginBottom: 20,
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default HomeScreen;
