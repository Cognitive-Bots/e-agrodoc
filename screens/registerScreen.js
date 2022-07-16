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
} from "react-native";
import config from "../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = ({ setSignedIn }) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userAge, setUserAge] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState("");

    const handleSignup = async () => {
        setErrortext("");
        if (!userEmail) {
            alert("Please fill Email");
            return;
        }
        if (!userName) {
            alert("Please fill Username");
            return;
        }
        if (!userAge) {
            alert("Please fill Age");
            return;
        }
        if (!userPassword) {
            alert("Please fill Password");
            return;
        }
        setLoading(true);

        try {
            let response = await fetch(config.auth_ip + "register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    age: userAge,
                    password: userPassword,
                }),
            });
            let responseJson = await response.status;
            console.log(responseJson);
            if (responseJson == 200) {
                console.log("User is created and updated in database")
                setLoading(false);
                setSignedIn(true);
                if (responseJson) {
                    AsyncStorage.setItem("user_id", userName);
                } else {
                    console.log("Please check your email id or password");
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log("Keyboard dismissed");
        }} >
            <View style={styles.container}>
                <StatusBar style="inverted" />
                <Text style={styles.logo}>E-AgroDoc</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="black"
                        onChangeText={(text) => setUserName(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor="black"
                        onChangeText={(text) => setUserEmail(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Age"
                        keyboardType="number-pad"
                        placeholderTextColor="black"
                        onChangeText={(text) => setUserAge(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="black"
                        onChangeText={(text) => setUserPassword(text)}
                    />
                </View>
                {errortext != "" ? (
                    <Text style={styles.errorTextStyle}>{errortext}</Text>
                ) : null}
                <TouchableOpacity
                    style={styles.signupBtn}
                    onPress={() => handleSignup()}
                >
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
            </View>
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
        fontSize: 45,
        color: "#009E60",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#fdf6e3",
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
        color: "white",
        fontSize: 16,
    },
    signupBtn: {
        width: "80%",
        backgroundColor: "#009E60",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#009E60",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        marginBottom: 10,
    },
    loginText: {
        color: "white",
        fontSize: 20,
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
});

export default RegisterScreen;