import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";
const AboutScreen = ({ setSignedIn }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        borderWidth: 10,
        borderColor: "#fdf6e3",
        backgroundColor: "#fdf6e3",
      }}
    >
      <Text style={{ fontSize: 40 }}>Inspiration</Text>
      <Text style={{ fontSize: 15 }}>
        The “E-AgroDoc” mobile application is an interactive tool for farmers to
        find diseases,take crop recommendations and fertilizer recommendations.
        “Agro” stands for agriculture and doc stands for doctor and from which
        we derived the name of the project “E-AgroDoc”. As the world is
        progressing, we are finding new diseases to tackle. Let it be with
        humans or plants, the number of diseases are gradually increasing and we
        need an efficient way to track and find them. What is better than a
        machine l People forget that the fact that humankind is deteriorating
        the nutrients in the soil and the soil will never be as flexible with
        crops as it was before. Not every crop is suitable for different soil
        types. To get the best yield, we need to plant the crop which is most
        suitable for that soil and that recommendation is done in E-agrodoc.
      </Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={{ fontSize: 40 }}>Team</Text>
      <Text style={{ fontSize: 20 }}>
        Sujith Sai Nimmala
      </Text>
      <Text style={{ fontSize: 20 }}>
        Saish Reddy Komalla
      </Text>
      <Text style={{ fontSize: 20 }}>R Sai Karthik</Text>
    </View>
  );
};

export default AboutScreen;
