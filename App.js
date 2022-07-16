import React from "react";
import { StyleSheet } from "react-native";
import MainStack from "./routes/mainStack";

export default function App() {
  return <MainStack />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5236",
  },
});
