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
      allowsEditing: true,
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
    Alert.alert("Result", response.body);
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
