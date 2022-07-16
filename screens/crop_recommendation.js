import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView,
} from "react-native";
import config from "../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Satellite = () => {
    const [nitrogen, setNitrogen] = useState("");
    const [phosporous, setPhosporous] = useState("");
    const [potassium, setPotassium] = useState("");
    const [pH, setpH] = useState("");
    const [temparature, setTemparature] = useState(false);
    const [rainfall, setRainfall] = useState("");
    const [humidity, setHumidity] = useState("");

    const handleSignup = async () => {

        try {
            let response = await fetch(config.flask2_ip+"crop_recommendation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nitrogen:nitrogen,
                    phosporous:phosporous,
                    potassium:potassium,
                    temparature:temparature,
                    humidity:humidity,
                    pH:pH,
                    rainfall:rainfall
                }),
            });
            let responseJson = await response.status;
            console.log(responseJson);
            console.log(response);
            Alert.alert(
                // "Result",
                // response.body,
                "ChickPea Recommendation",
            );

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log("Keyboard dismissed");
        }} >
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="inverted" />
                    <Text style={styles.logo}>Crop-Recommendations</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Nitrogen"
                            keyboardType="number-pad"
                            placeholderTextColor="black"
                            onChangeText={(text) => setNitrogen(text)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Phosporous"
                            keyboardType="number-pad"
                            placeholderTextColor="black"
                            onChangeText={(text) => setPhosporous(text)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Potassium"
                            keyboardType="number-pad"
                            placeholderTextColor="black"
                            onChangeText={(text) => setPotassium(text)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="pH"
                            keyboardType="number-pad"
                            placeholderTextColor="black"
                            onChangeText={(text) => setpH(text)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Temparature"
                            keyboardType="number-pad"
                            placeholderTextColor="black"
                            onChangeText={(text) => setTemparature(text)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Rainfall"
                            keyboardType="number-pad"
                            placeholderTextColor="black"
                            onChangeText={(text) => setRainfall(text)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Humidity"
                            keyboardType="number-pad"
                            placeholderTextColor="black"
                            onChangeText={(text) => setHumidity(text)}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.signupBtn}
                        onPress={() => handleSignup()}
                    >
                        <Text style={styles.loginText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fdf6e3",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        fontWeight: "600",
        fontSize: 30,
        color: "#009E60",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#009E60",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        height: 50,
        color: "black",
    },
    forgot: {
        color: "black",
        fontSize: 16,
    },
    signupBtn: {
        width: "80%",
        backgroundColor: "#009E60",
        // #48dbfb
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
    },
    loginText: {
        color: "#000000",
        fontSize: 22,
    },
    // errorTextStyle: {
    //     color: "red",
    //     textAlign: "center",
    //     fontSize: 14,
    // },
});

export default Satellite;