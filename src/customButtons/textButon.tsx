import React from "react";

import { StyleSheet, Text, View } from "react-native";

export default function TextButton({text,value}){
    return(
        <>
        <View style={styles.container}>
        <Text style={styles.textHeader}>
            {text} 
        </Text>
        <Text style={styles.textValue}>
        {value}
        </Text>
        </View>
        
        </>
    )
}

const styles=StyleSheet.create({
    container:{
        marginVertical:5
    },
    textHeader:{
        fontWeight:"bold",
        fontSize:20,
        color:"white"
    },
    textValue:{
        color:"white",
        fontSize:15
    }
})