import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, Button } from "react-native";
import * as React from "react";
import AboutScreen from "../screens/about";
import HomeStack from "./homeStack";
import Account from "../screens/account";
import HeaderTitle from "../screens/header_title";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ setSignedIn }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          color: "#009E60",
          headerStyle: {
            backgroundColor: "#fdf6e3",
            borderBottomWidth: 0,
          },
          headerTitle: () => <HeaderTitle />,
        }}
      />
      <Drawer.Screen name="About">
        {(props) => <AboutScreen {...props} setSignedIn={setSignedIn} />}
      </Drawer.Screen>
      <Drawer.Screen name="Account">
        {(props) => <Account {...props} setSignedIn={setSignedIn} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
