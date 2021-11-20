import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Button, View } from 'react-native';
import HomeStack from './homeStack';
import AboutScreen from '../screens/about';
import HomeScreen from '../screens/homescreen';


const Drawer = createDrawerNavigator();

const navContainer = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default navContainer;