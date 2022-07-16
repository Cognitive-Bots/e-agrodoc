// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import config from '../utils/config';
// const MobileCaptured = ({ route }) => {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== 'web') {
//         const { status } =
//           await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== 'granted') {
//           alert('camera roll permissions needed');
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       // aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   const uploadToServer = async () => {
//     console.log("in upload server")
//     console.log(image);

//     var res = image;
//     let localUri = res
//     var fileType = localUri.split(".").pop();
//     console.log(fileType);
//     var typeFile;
//     if (fileType == "dcm") {
//       typeFile = "application/dicom";
//     } else if (fileType == "png") {
//       typeFile = "image/png";
//     } else if (fileType == "jpg") {
//       typeFile = "image/jpg";
//     } else {
//       typeFile = "image/jpeg";
//     }

//     var data = new FormData();
//     data.append("file", image);
//     // {
//     //   uri: localUri,
//     //   type: typeFile,
//     // });
//     console.log(data);
//     try {
//       let response = await fetch(config.upload_ip + "/api/test", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "multipart/form-data",
//         },
//         body: data,
//       });
//       let responseJson = await response.status;
//       console.log("File upload status code: ", responseJson);
//       if (responseJson == 200) {
//         alert("File Uploaded !!");
//         setImage(null);
//       } else {
//         alert("Server Error or File not uploadable !!");
//         setImage(null);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <View style={{ flex: 1, alignItems: 'center', backgroundColor: "black" }}>
//       {image && (
//         <ScrollView>
//           <View style={{ flex: 1, alignItems: 'center', marginTop: 100, justifyContent: 'center' }}>
//             <ScrollView horizontal={true} alwaysBounceHorizontal={true} alwaysBounceVertical={true} vertical={true}>
//               <Image
//                 source={{
//                   uri: image,
//                 }}
//                 style={{ width: 400, height: 400 }}
//               />
//             </ScrollView>
//           </View>
//         </ScrollView>
//       )}
//       <View style={{ flex: 1, alignItems: 'center', margin: 10, justifyContent: 'center' }}>
//         <Button title="Upload" onPress={pickImage} color="coral" />
//       </View>
//       <View style={{ flex: 1, alignItems: 'center', margin: 10, justifyContent: 'center' }}>
//         <Button title="Upload to Server" onPress={uploadToServer} color="coral" />
//       </View>
//     </View>
//   );
// }

// export default MobileCaptured;

import React, { Component } from "react";
import { Button, SafeAreaView, StyleSheet, Alert, Text } from "react-native";
import config from "../utils/config";

//Importing the installed libraries
import * as FS from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cameraRollPer: null,
      disableButton: false,
    };
  }
  async componentDidMount() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    this.setState((state, props) => {
      return {
        cameraRollPer: status === "granted",
        disableButton: false,
      };
    });
  }

  uriToBase64 = async (uri) => {
    let base64 = await FS.readAsStringAsync(uri, {
      encoding: FS.EncodingType.Base64,
    });
    return base64;
  };

  pickMedia = async () => {
    this.setState((state, props) => {
      return {
        cameraRollPer: state.cameraRollPer,
        disableButton: true,
      };
    });
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });
    if (result.cancelled) {
      return;
    }
    if (result.type == "image") {
      await this.toServer({
        type: result.type,
        base64: result.base64,
        uri: result.uri,
      });
    } else {
      let base64 = await this.uriToBase64(result.uri);
      await this.toServer({
        type: result.type,
        base64: base64,
        uri: result.uri,
      });
    }
  };

  toServer = async (mediaFile) => {
    let type = mediaFile.type;
    let schema = "http://";
    // let host = ip;
    let route = "";
    let port = "8012";
    let url = "";
    let content_type = "";
    type === "image"
      ? ((route = "/image"), (content_type = "image/jpeg"))
      : ((route = "/video"), (content_type = "video/mp4"));
    url = config.flask1_ip;

    let response = await FS.uploadAsync(url, mediaFile.uri, {
      headers: {
        "content-type": content_type,
      },
      httpMethod: "POST",
      uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
    });

    console.log(response.headers);
    console.log(response.body);
    Alert.alert(
      "Result",
      response.body,
    );
  };

  render() {
    return (

      <SafeAreaView style={styles.container}>
        {this.state.cameraRollPer ? (
          <Button 
         
            title="Pick From Gallery"
            disabled={this.state.disableButton}

            onPress={async () => {
              await this.pickMedia();
              this.setState((s, p) => {
                return {
                  cameraRollPer: s.cameraRollPer,
                  disableButton: false,
                };
              });
            }}
          />
        ) : (
          <Text>Camera Roll Permission Required ! </Text>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6e3",
    alignItems: "center",
    justifyContent: "center",
  },
  Btn: {
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
});
