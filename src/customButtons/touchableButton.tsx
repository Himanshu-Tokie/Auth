import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SignUpData } from "../utils/enums";

export default function TouchableButton({navigation,text,data}){
    function goTo(){
        switch (text){
            case SignUpData.Edit:
            case SignUpData.ShowData:
                navigation.navigate('Profile',data)
                break;
            case SignUpData.ChangePassword:
                console.log("5 Star - Do nothing");
                break;
            case SignUpData.LogOut:
                navigation.popToTop();
                break;
            default:
                console.log("5 Star - Do nothing");
                break;
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goTo} style={styles.button}>
            <Text style={styles.submit}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginBottom:20,
        marginHorizontal:30
    },
    button:{
        borderColor:"white",
        borderWidth:1,
        borderRadius:20
    },
    submit: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      margin: 15,
    },
})