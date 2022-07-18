import React from "react";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const HeaderTitle = () => {
    navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
            <View style={{ flexDirection: "row", justifyContent: "center", }}>
                <Text style={{ fontSize: 20, fontWeight: "bold"}}>
                    E-AgroDoc
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default HeaderTitle;