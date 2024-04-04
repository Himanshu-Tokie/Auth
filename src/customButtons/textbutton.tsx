import React from "react";
import { View,Text,TouchableOpacity,StyleSheet} from "react-native";

export default function TextButton({text}){
    function showData(){

    }
    return (
        <View>
            <Text style={styles.submit}>{text}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    
    submit: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      margin: 15,
    },
})