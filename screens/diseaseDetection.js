import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

const DiseaseDetection = ({ route }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("camera roll permissions needed");
        }
      }
    })();
  }, []);

  // code to post image to server at port 8000
  const postImage = async () => {
    console.log(image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "disease-detection");
    data.append("cloud_name", "disease-detection");
    const response = await fetch(
      "http://192.168.29.54:8000/upload",
      {
        method: "POST",
        body: data
      }
    );
    // const file = await response.json();
    let responseJson = await response.status;
    console.log(responseJson);
    return responseJson;
  };
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
      {image && (
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginTop: 100,
              justifyContent: "center",
            }}
          >
            <ScrollView
              horizontal={true}
              alwaysBounceHorizontal={true}
              alwaysBounceVertical={true}
              vertical={true}
            >
              <Image
                source={{
                  uri: image,
                }}
                style={{ width: 400, height: 400 }}
              />
            </ScrollView>
          </View>
        </ScrollView>
      )}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          margin: 10,
          justifyContent: "center",
        }}
      >
        <Button title="Upload" onPress={pickImage} color="coral" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          margin: 10,
          justifyContent: "center",
        }}
      >
        <Button title="Predict" onPress={postImage} color="coral" />
      </View>
    </View>
  );
};

export default DiseaseDetection;
