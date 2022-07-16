import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homescreen";
import DiseaseDetection from "../screens/disease_detection";
import CropRecommendation from "../screens/crop_recommendation";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="disease_detection" component={DiseaseDetection} />
      <Stack.Screen name="crop_recommendation" component={CropRecommendation} />
    </Stack.Navigator>
  );
};
export default HomeStack;
