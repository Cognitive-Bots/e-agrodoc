import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as tf from '@tensorflow/tfjs';
// import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-na```````tive';

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

const classifyImage = async () => {
  if (!image) {
    alert('Please select an image first');
    return;
  }
  const body = JSON.stringify({
    requests: [
      {
        image: {
          content: image.base64,
        },
        features: [
          {
            type: 'LABEL_DETECTION',
            maxResults: 10,
          },
        ],
      },
    ],
  });
  try {
    const tfReady = await tf.ready();
    const model = await tf.loadLayersModel('https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2');
    const predictions = await model.classify(image);
    console.log(predictions);
  } catch (error) {
    console.log(error);
  }
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

export default DiseaseDetection;