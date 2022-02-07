import * as React from 'react';
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import { NavigationContainer } from '@react-navigation/native';
const MainStack = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen"
                // 1 option having no title
                // headerMode="none"
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                {/* <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="diseaseDetection" component={DiseaseDetection} />
                <Stack.Screen name="cropRecommendation" component={CropRecommendation} />
                <Stack.Screen name="fertilizerRecommendation" component={FertilizerRecommendation} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;
