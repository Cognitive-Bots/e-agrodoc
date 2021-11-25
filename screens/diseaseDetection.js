import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as tf from '@tensorflow/tfjs';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';


const diseaseDetection = ({ route }) => {
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

  const classifyImage = async () => {
    const model = await tf.loadLayersModel('assets\model.json');
    const imageAssetPath = image.uri;
    const response = await fetch(imageAssetPath);
    const jpegBytes = await response.arrayBuffer();
    const rawImageData = new Uint8Array(jpegBytes);
    const { width, height, data } = jpeg.decode(rawImageData);
    const imgTensor = tf.tensor3d(data, [height, width, 3]);
    const input = imgTensor.toFloat().div(tf.scalar(255));
    const predictions = await model.predict(input).data();
    console.log(predictions);
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
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: "black" }}>
      {image && (
        <ScrollView>
          <View style={{ flex:1, alignItems: 'center', marginTop:100, justifyContent: 'center' }}>
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
      <View style={{flex:1, alignItems: 'center', margin: 10, justifyContent: 'center' }}>
        <Button title="Upload" onPress={pickImage} color="coral" />
      </View>
      <View style={{flex:1, alignItems: 'center', margin: 10, justifyContent: 'center' }}>
        <Button title="Predict" onPress={classifyImage} color="coral" />
      </View>
    </View>
  );
}

export default diseaseDetection;