import React, { useContext, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import SignUpTemplate from '../../customButtons/button';
import UserImage from '../../customButtons/image';
import { Data } from '../../utils/context';
import { SignUpData } from '../../utils/enums';
export default SignUpPage;


function SignUpPage({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [alert,setAlert] = useState(false);
  const [data, setData] = useContext(Data);
  console.log(data);
  
  function saveData() {
    let ok = true
    switch ("") {
      case firstName:
      case lastName:
      case email:
      case phoneNumber:
      case dateOfBirth:
      case password:
        case confirmPassword:
        Alert.alert("Fill all credentials")
        ok=false
    }
    
    if (ok) {
      
      setData(email, {
          [SignUpData.FirstName]: firstName,
          [SignUpData.LastName]: lastName,
          [SignUpData.Email]: email,
          [SignUpData.PhoneNumber]: phoneNumber,
          [SignUpData.Password]: password,
          [SignUpData.ConfirmPassword]: confirmPassword,
          [SignUpData.DateOfBirth]: dateOfBirth,
          [SignUpData.Uri]: photo
        }
      )
      console.log(data);
      navigation.navigate('SignIn')
    }

  }

  return (

    <ScrollView style={styles.container}>
      <View>
        <UserImage photo={photo} setPhoto={setPhoto} />
      </View>
      <View style={styles.data}>
        <SignUpTemplate text={SignUpData.FirstName} changeState={setFirstName} alert={alert}/>
        <SignUpTemplate text={SignUpData.LastName} changeState={setlastName} alert={alert}/>
        <SignUpTemplate text={SignUpData.Email} changeState={setemail} alert={alert}/>
        <SignUpTemplate text={SignUpData.PhoneNumber} changeState={setphoneNumber} alert={alert}/>
        <SignUpTemplate text={SignUpData.DateOfBirth} changeState={setdateOfBirth} alert={alert}/>
        <SignUpTemplate text={SignUpData.Password} changeState={setPassword} alert={alert}/>
        <SignUpTemplate text={SignUpData.ConfirmPassword} changeState={setConfirmPassword} isConfirmPassword={password} alert={alert}/>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={saveData}>
          <Text style={styles.submit}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

let styles = StyleSheet.create({

  data: {
    marginLeft: 50,
    marginRight: 50,
  },
  submit: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  button: {
    backgroundColor: "green",
    borderWidth: 0,
    borderColor: 'grey',
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal: 60
  },
  container: {
    // marginBottom:10
    backgroundColor: "#323139"
  }
});
