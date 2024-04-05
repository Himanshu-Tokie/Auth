import React from 'react';
import {Image, Text, View,StyleSheet} from 'react-native';
import TouchableButton from '../../customButtons/touchableButton';
import {SignUpData} from '../../utils/enums';

export default function Home({navigation, route}) {
  const data = route.params;
  console.log(data);

  return (
    <>

        <View style={styles.container}>
          <Image source={{uri: data[SignUpData.Uri]}} style={styles.image} />
          <Text style={styles.text}>{data[SignUpData.FirstName] + ' ' + data[SignUpData.LastName]}</Text>
        </View>

      <View>
        <TouchableButton
          text={SignUpData.ShowData}
          navigation={navigation}
          data={data}
        />
      </View>
      {/* <View>
            <TouchableButton text={SignUpData.Edit} navigation={navigation}/>
            </View> */}
      <View>
        <TouchableButton
          text={SignUpData.ChangePassword}
          navigation={navigation}
        />
      </View>
      <View>
        <TouchableButton text={SignUpData.LogOut} navigation={navigation} />
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
