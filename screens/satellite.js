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
} from "react-native";
import config from "../utils/config";

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
            const response = await fetch(config.flask2_ip, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nitrogen: nitrogen,
                    phosporous: phosporous,
                    potassium: potassium,
                    pH: pH,
                    temparature: temparature,
                    rainfall: rainfall,
                    humidity: humidity,
                }),
            });
            const output = await response.text();
            Alert.alert(
                "Result",
                output,
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.error(error);
        }
    }


    //     fetch(config.flask2_ip+"crop_recommendation", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             nitrogen:nitrogen,
    //             phosporous:phosporous,
    //             potassium:potassium,
    //             temparature:temparature,
    //             humidity:humidity,
    //             pH:pH,
    //             rainfall:rainfall
    //         }),
    //     })
    //     .then((response) => {
    //         console.log(response.json());
    //     });
    // } catch (error) {
    //     console.error(error);
    // }
    // };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log("Keyboard dismissed");
        }} >
            <View style={styles.container}>
                <StatusBar style="inverted" />
                <Text style={styles.logo}>Crop-Recommendations</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nitrogen"
                        keyboardType="number-pad"
                        placeholderTextColor="#ecf0f1"
                        onChangeText={(text) => setNitrogen(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Phosporous"
                        keyboardType="number-pad"
                        placeholderTextColor="#ecf0f1"
                        onChangeText={(text) => setPhosporous(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Potassium"
                        keyboardType="number-pad"
                        placeholderTextColor="#ecf0f1"
                        onChangeText={(text) => setPotassium(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="pH"
                        keyboardType="number-pad"
                        placeholderTextColor="#ecf0f1"
                        onChangeText={(text) => setpH(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="temparature"
                        keyboardType="number-pad"
                        placeholderTextColor="#ecf0f1"
                        onChangeText={(text) => setTemparature(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Rainfall"
                        keyboardType="number-pad"
                        placeholderTextColor="#ecf0f1"
                        onChangeText={(text) => setRainfall(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Humidity"
                        keyboardType="number-pad"
                        placeholderTextColor="#ecf0f1"
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
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e0e0e",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        fontWeight: "600",
        fontSize: 45,
        color: "#15f4ee",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#0e0e0e",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#15f4ee",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        height: 50,
        color: "white",
    },
    forgot: {
        color: "white",
        fontSize: 16,
    },
    signupBtn: {
        width: "80%",
        backgroundColor: "#15f4ee",
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