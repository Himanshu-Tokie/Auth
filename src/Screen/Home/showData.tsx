import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TextButton from '../../customButtons/textButon';
import { SignUpData } from '../../utils/enums';

export default function ShowData({route}) {
  const data = route.params;
  console.log(data[SignUpData.Uri]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: data[SignUpData.Uri]}} style={styles.image} />
          <TextButton
            text={''}
            value={data[SignUpData.FirstName] + ' ' + data[SignUpData.LastName]}
          />
        </View>
        <View style={styles.textData}>
          <TextButton text={SignUpData.Email} value={data[SignUpData.Email]} />
          <TextButton
            text={SignUpData.DateOfBirth}
            value={data[SignUpData.DateOfBirth]}
          />
          <TextButton
            text={SignUpData.PhoneNumber}
            value={data[SignUpData.PhoneNumber]}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    imageContainer:{
        alignItems: 'center',
        marginTop:15
    },
  image: {
    margin: 20,
    
    // alignContent:'center',
    // justifyContent:"center",
    height: 120,
    width: 120,
    borderRadius: 50,
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 60,
    backgroundColor:"#323139",
    flex:1
  },
  textData: {
    marginVertical: 20,
  },
});
