import * as React from "react";
import "react-native-gesture-handler";
// import { NavigationState } from 'react-navigation';

// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homescreen";
import DiseaseDetection from "../screens/disease_detection";
import CropRecommendation from "../screens/crop_recommendation";

// const getActiveRouteState = function (route){
//   if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
//       return route;
//   }

//   const childActiveRoute = route.routes[route.index];
//   return getActiveRouteState(childActiveRoute);
// }

const HomeStack = (props) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // show header only if in Home Screen
      screenOptions={
        ({ route }) => ({
          headerShown: route.name != "Home",
          headerTitle: route.name === "Home" ? "E-AgroDoc" : "",
          headerStyle: {
            backgroundColor: "#fdf6e3",
            borderBottomWidth: 0,
          },
        })
      }
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="disease_detection" component={DiseaseDetection} />
      <Stack.Screen name="crop_recommendation" component={CropRecommendation} />
    </Stack.Navigator>
  );
};
export default HomeStack;
