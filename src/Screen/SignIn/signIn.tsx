import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonTemplate from '../../customButtons/button';
import { SignUpData } from '../../utils/enums';
import Process from '../Process/process';

export default function UserSignIn({navigation}) {
    const [userName,setUserName] = useState('adsf');
    const [password,setPassword] = useState('asdf');
  return (
    <>
      <View style={styles.container}>
        <View>
          <ButtonTemplate text={SignUpData.UserName} changeState={setUserName}></ButtonTemplate>
          <ButtonTemplate text={SignUpData.UserPassword} changeState={setPassword}></ButtonTemplate>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Process',{UserName:userName,Password:password})}>
            <Text>SignIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Si',{UserName:userName,Password:password})}>
            <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#323139',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderWidth: 0,
    borderColor: 'grey',
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal: 60,
  },
});
