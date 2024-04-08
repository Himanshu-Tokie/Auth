import { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Data } from "../../utils/context";
import { SignUpData } from "../../utils/enums";


export default function ForgotPassword({navigation}){
    const [UserName,setUserName]= useState('');
    const [newPassword,setPassword]= useState('');
    const [confirmNewPassword,setConfirmPassword]= useState('');
    const [confirmation,setConfirmation] = useState(false);
    const data = useContext(Data);
    return (
        <>
        <SafeAreaView style={styles.container}>
        <View style={styles.data}>
            <SignUpData text={SignUpData.UserName} changeState={setUserName}></SignUpData>
            {/* {confirmation &&
            <>
            <SignUpTemplate text={SignUpData.Password} changeState={setPassword} />
        <SignUpTemplate text={SignUpData.ConfirmPassword} changeState={setConfirmPassword} isConfirmPassword={newPassword} />
            </>
        } */}
        </View>
        <View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.submit}>Change Password</Text>
        </TouchableOpacity>
      </View>
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