import * as React from 'react';
import { Button, View } from 'react-native';

import { createStackNavigator} from 'react-navigation-stack';
const Stack = createStackNavigator();
// Create a stack navigator for 3 screens
// function HomeStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="diseaseDetection" component={DiseaseDetection} />
//             <Stack.Screen name="cropRecommendation" component={CropRecommendation} />
//             <Stack.Screen name="fertilizerRecommendation" component={FertilizerRecommendation} />
//         </Stack.Navigator>
//     );
// }

const screens = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
        },
    }, 
    diseaseDetection: {
        screen: DiseaseDetection,
        navigationOptions: {
            title: 'Disease Detection',
        },
    },
    cropRecommendation: {
        screen: CropRecommendation,
        navigationOptions: {
            title: 'Crop Recommendation',
        },
    },
    fertilizerRecommendation: {
        screen: FertilizerRecommendation,
        navigationOptions: {
            title: 'Fertilizer Recommendation',
        },
    },
};

const HomeStack = createStackNavigator(screens);
export default HomeStack;
