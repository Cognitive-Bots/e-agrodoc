import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const DiseaseDetection = ({ route }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('camera roll permissions needed');
        }
      }
    })();
  }, []);

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

  const uploadToServer = async () => {
    var res = image;
    let localUri = res.uri;
    let filename = res.name;

    var fileType = filename.split(".").pop();
    var typeFile;
    if (fileType == "dcm") {
      typeFile = "application/dicom";
    } else if (fileType == "png") {
      typeFile = "image/png";
    } else if (fileType == "jpg") {
      typeFile = "image/jpg";
    } else {
      typeFile = "image/jpeg";
    }

    var data = new FormData();
    data.append("file", {
      uri: localUri,
      type: typeFile,
      name: filename,
    });
    console.log(data);
    try {
      // http://183.82.46.37:1111/fileup --> udaan-super-micro
      // http://192.168.231.64:1111/fileup --> My local PC
      // Change below IP with Linux WIFI IPv4 when giving presentation
      let response = await fetch(global.ip_upload + "fileup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: data,
      });
      let responseJson = await response.status;
      console.log("File upload status code: ", responseJson);
      if (responseJson == 200) {
        alert("File Uploaded !!");
        setImage(null);
      } else {
        alert("Server Error or File not uploadable !!");
        setImage(null);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: "black" }}>
      {image && (
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', marginTop: 100, justifyContent: 'center' }}>
            <ScrollView horizontal={true} alwaysBounceHorizontal={true} alwaysBounceVertical={true} vertical={true}>
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
      <View style={{ flex: 1, alignItems: 'center', margin: 10, justifyContent: 'center' }}>
        <Button title="Upload" onPress={pickImage} color="coral" />
      </View>
    </View>
  );
}

export default DiseaseDetection;