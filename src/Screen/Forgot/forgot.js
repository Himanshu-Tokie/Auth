import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignUpTemplate from "../../customButtons/button";
import { Data } from "../../utils/context";
import { SignUpData } from "../../utils/enums";


export default function ForgotPassword({navigation}){
    const [UserName,setUserName]= useState('');
    const [newPassword,setPassword]= useState('');
    const [confirmNewPassword,setConfirmPassword]= useState('');
    const [confirmation,setConfirmation] = useState(false);
    const [alert,setalert] = useState(false)
    const [data,setData] = useContext(Data);
    function check(){
      console.log(data);
      if(data.hasOwnProperty(UserName)){setConfirmation(true);setalert(false);}
      else setalert(true)
    }
  async function set(){
    console.log(newPassword,confirmNewPassword);
    if(newPassword !=='' && confirmNewPassword!==''){
      setData(UserName,{...data[UserName],[SignUpData.Password]:newPassword});
      Alert.alert("Password changed successfully");
      navigation.navigate('SignIn')
    }
  }
    return (
        <>
        <SafeAreaView style={styles.container}>
        <View style={styles.data}>
            <SignUpTemplate text={SignUpData.UserName} changeState={setUserName} alert={alert}></SignUpTemplate>
            {confirmation &&
            <>
            <SignUpTemplate text={SignUpData.Password} changeState={setPassword} />
        <SignUpTemplate text={SignUpData.ConfirmPassword} changeState={setConfirmPassword} isConfirmPassword={newPassword} />
        <TouchableOpacity style={styles.button} onPress={set}>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
            </>
        }
        </View>
        {
          !confirmation &&
          <View>
        <TouchableOpacity style={styles.button} onPress={check}>
          <Text style={styles.submit}>Change Password</Text>
        </TouchableOpacity>
      </View>
        }
        
        </SafeAreaView>
        
        </>
    )
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
      backgroundColor: "#323139",
        flex:1
    }
  });