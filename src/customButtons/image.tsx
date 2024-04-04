import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UserImage() {
  const [photo, setPhoto] = useState(null);

  const handleImagePicker = () => {
    // console.log(ImagePicker,'ImagePicker');
    async function launch() {
      const response = await launchImageLibrary();
      if (response.didCancel) {
        console.log('User cancelled image picker', 1);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error, 2);
      } else {
        setPhoto(response.assets[0].uri);
        // console.log(response.assets);
      }
    }
    launch();
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: photo}} style={styles.image} />
        <Icon
          name="camera"
          size={28}
          color="white"
          backgroundColor="transparent"
          onPress={handleImagePicker}
        />
        <Text style={styles.text}>Create Your Account</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  updateText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  container: {
    margin: 20,
    alignItems: 'center',
  },
});
