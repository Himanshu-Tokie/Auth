import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonTemplate from '../../customButtons/button';
import { SignUpData } from '../../utils/enums';
import Process from '../Process/process';
import { Data } from '../../utils/context';

export default function UserSignIn({ navigation, route }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useContext(Data);
  const result = useRef(0);
  console.log(data);
  if (route.params != undefined) {
    result.current = 1;
  }

  // useEffect(()=>{
  //   setUserName('');setPassword('');
  // },[userName,password])
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textInput}>
          <ButtonTemplate text={SignUpData.UserName} changeState={setUserName}></ButtonTemplate>
          <ButtonTemplate text={SignUpData.UserPassword} changeState={setPassword}></ButtonTemplate>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {  navigation.navigate('Process', { UserName: userName, Password: password }) }}>
            <Text>Log In</Text>
          </TouchableOpacity>
          {
            result.current ? (
              <Text style={styles.errText}>Invalid Username or Password</Text>
            ) : ''
          }
          <TouchableOpacity
            style={styles.button}
            onPress={() => {  navigation.navigate('SignUp', { UserName: userName, Password: password }) }}>
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
  textInput: {
    // borderWidth: 2,
    // borderColor: 'grey',
    borderRadius: 20,
    padding: 10,
    marginHorizontal:25
    // textAlign: 'left',
  },
  button: {
    backgroundColor: 'green',
    borderWidth: 0,
    borderColor: 'grey',
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal: 60,
  },
  errText: {
    color: 'red',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 5
    // alignContent:'center',
    // justifyContent:'center'
  },
});

// { "Himanshu@gmail.com": { "Password": "Anil@123" }, 
// "asdf@asdf.asdf": { "Confirm Password": "Anil@123", "Date of Birth": "05-04-2022", "Email ID": "asdf@asdf.asdf", "First Name": "Himanshu", "Last Name": "Asdf", "Password": "Anil@123", "Phone Number": "+917894561230" }, 
// "qwer@qwer.qwer": { "Confirm Password": "Anil@123", "Date of Birth": "05-04-2021", "Email ID": "qwer@qwer.qwer", "First Name": "Asdf", "Last Name": "Asdf", "Password": "Anil@123", "Phone Number": "+917894561230" } 
// }
